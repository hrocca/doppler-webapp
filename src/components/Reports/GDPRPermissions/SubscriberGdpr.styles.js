import styled from 'styled-components';
import { fonts } from '../../styles/fonts';
import { spacings } from '../../styles/spacings';

const TextColumn = styled.span`
  p {
    font-size: ${fonts.fontLvl3};
  }
`;

const EmptyBox = styled.div`
  padding: ${spacings.spacesLvl8};
  width: 100%;
`;

const DownloadLink = styled.div`
  padding: ${spacings.spacesLvl0} ${spacings.spacesLvl3};
`;

export { TextColumn, EmptyBox, DownloadLink };
