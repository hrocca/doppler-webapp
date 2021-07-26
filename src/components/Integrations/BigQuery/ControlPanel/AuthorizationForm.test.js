import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IntlProvider from '../../../../i18n/DopplerIntlProvider.double-with-ids-as-values';
import { AuthorizationForm } from './AuthorizationForm';

describe('AuthorizationForm ', () => {
  it('should not show tag cloud', () => {
    // Arrange
    const emails = [];

    // Act
    render(
      <IntlProvider>
        <AuthorizationForm emails={emails} />
      </IntlProvider>,
    );

    // Assert
    expect(screen.queryByRole('list', { name: 'cloud tags' })).not.toBeInTheDocument();
    expect(screen.getByRole('textbox').value).toBe('');
  });

  it('should show the tag cloud with the initial values', () => {
    // Arrange
    const emails = ['harcode_1@mail.com', 'harcode_2@mail.com'];

    // Act
    render(
      <IntlProvider>
        <AuthorizationForm emails={emails} />
      </IntlProvider>,
    );

    // Assert
    const cloudTags = screen.getByRole('list', { name: 'cloud tags' });
    expect(cloudTags).toBeInTheDocument();
    expect(cloudTags.querySelectorAll('li').length).toBe(emails.length);
    expect(screen.getByRole('textbox').value).toBe('');
  });

  it('should add tags when passing validations and submit form', async () => {
    // Arrange
    const onSubmit = jest.fn();
    const tagToAdd1 = 'harcode_1@mail.com';
    const invalidTag = 'harcode_fail';
    const tagToAdd2 = 'harcode_2@mail.com';
    const emails = [];

    // Act
    const { container } = render(
      <IntlProvider>
        <AuthorizationForm emails={emails} onSubmit={onSubmit} />
      </IntlProvider>,
    );

    // Assert
    const getCloudTags = () => screen.queryByRole('list', { name: 'cloud tags' });
    const getErrors = () => screen.queryByRole('alert');
    let cloudTags = getCloudTags();
    let errors;

    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: 'add tag' });
    expect(getCloudTags()).not.toBeInTheDocument();
    expect(input.value).toBe('');

    // add first tag (simulated with click event)
    await fireEvent.change(input, { target: { value: tagToAdd1 } });
    fireEvent.click(addButton);
    cloudTags = getCloudTags();
    errors = getErrors();
    expect(cloudTags).toBeInTheDocument();
    expect(errors).not.toBeInTheDocument();
    // emails.length+1 because the first tag was added
    expect(cloudTags.querySelectorAll('li').length).toBe(emails.length + 1);

    // fails when add second tag (simulated with enter event)
    await fireEvent.change(input, { target: { value: invalidTag } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    cloudTags = getCloudTags();
    errors = getErrors();
    // the same amount of tag is kept because it was not added
    expect(cloudTags.querySelectorAll('li').length).toBe(emails.length + 1);
    expect(errors).toBeInTheDocument();

    // success when add second tag (simulated with enter event)
    await fireEvent.change(input, { target: { value: tagToAdd2 } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    cloudTags = getCloudTags();
    errors = getErrors();
    // emails.length+2 because the second tag was added
    expect(cloudTags.querySelectorAll('li').length).toBe(emails.length + 2);
    expect(errors).not.toBeInTheDocument();

    // simulate submit form
    const submitButton = screen.getByRole('button', { name: 'common.save' });
    fireEvent.click(submitButton);
    expect(submitButton).toBeDisabled();
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        emails: [tagToAdd1, tagToAdd2],
      }),
    );
    expect(submitButton).not.toBeDisabled();
  });
});
