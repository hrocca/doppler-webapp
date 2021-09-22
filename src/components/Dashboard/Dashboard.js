import React from 'react';
import Carousel from './Carousel/Carousel';
import Slide from './Carousel/Slide/Slide';
import PreviewPost from './Carousel/PreviewPost/PreviewPost';
import * as S from './Dashboard.styles';

export const Dashboard = () => {
  const lastPost = [
    {
      id: 1,
      title: `post 1`,
      description: `markdown content 1`,
      link: `http://localhost:3000/dashboard`,
    },
    {
      id: 2,
      title: `post 2`,
      description: `markdown content 2`,
      link: `http://localhost:3000/dashboard`,
    },
  ];
  return (
    <div className="dashboard">
      <header className="hero-banner">
        <div className="dp-container">
          <div className="dp-rowflex">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h2>¡Bienvenido Santiago!</h2>
            </div>
            <div className="col-sm-12">
              <p>
                Este es tu <b>Tablero de Inicio</b>. Echa un vistazo a tus estadísticas de
                rendimiento y consejos personalizados.
              </p>
            </div>
          </div>
          <span className="arrow"></span>
        </div>
      </header>
      <div className="dpsg-wrapper">
        <div className="dpsg-content-wrap">
          <S.Article className="dp-container">
            <span>
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.83767 0C2.81996 0.000331339 1.84402 0.404762 1.12439 1.12439C0.404762 1.84402 0.000331339 2.81996 0 3.83767V26.1598C0.00165187 27.1776 0.406604 28.1532 1.12615 28.873C1.84569 29.5928 2.82118 29.998 3.83893 30H24.0897C24.4213 30 24.7393 29.8683 24.9737 29.6339C25.2081 29.3994 25.3398 29.0815 25.3398 28.7499C25.3398 28.4184 25.2081 28.1005 24.9737 27.866C24.7393 27.6316 24.4213 27.4999 24.0897 27.4999H3.83893C3.48532 27.4976 3.14682 27.3563 2.89654 27.1065C2.64627 26.8567 2.50431 26.5184 2.50136 26.1648C2.50169 25.8102 2.64272 25.4702 2.89349 25.2194C3.14426 24.9686 3.48429 24.8276 3.83893 24.8273H24.0897C24.4156 24.8099 24.7236 24.6726 24.9543 24.4418C25.1851 24.211 25.3224 23.9031 25.3398 23.5772C25.3398 23.5685 25.3398 23.5622 25.3398 23.5535V1.25005C25.3398 0.918517 25.2081 0.600561 24.9737 0.366131C24.7393 0.131701 24.4213 0 24.0897 0H7.27531V22.3222H4.77521V0H3.83767ZM13.3006 6.23776H18.2757C18.6073 6.23776 18.9253 6.36946 19.1597 6.6039C19.3941 6.83833 19.5258 7.15628 19.5258 7.48782C19.5258 7.81935 19.3941 8.13731 19.1597 8.37174C18.9253 8.60617 18.6073 8.73787 18.2757 8.73787H13.3006C12.969 8.73787 12.6511 8.60617 12.4166 8.37174C12.1822 8.13731 12.0505 7.81935 12.0505 7.48782C12.0505 7.15628 12.1822 6.83833 12.4166 6.6039C12.6511 6.36946 12.969 6.23776 13.3006 6.23776ZM13.3006 11.313H18.2757C18.6073 11.313 18.9253 11.4447 19.1597 11.6791C19.3941 11.9135 19.5258 12.2315 19.5258 12.563C19.5258 12.8946 19.3941 13.2125 19.1597 13.4469C18.9253 13.6814 18.6073 13.8131 18.2757 13.8131H13.3006C12.969 13.8131 12.6511 13.6814 12.4166 13.4469C12.1822 13.2125 12.0505 12.8946 12.0505 12.563C12.0505 12.2315 12.1822 11.9135 12.4166 11.6791C12.6511 11.4447 12.969 11.313 13.3006 11.313Z"
                  fill="#333333"
                />
              </svg>
            </span>{' '}
            Aprende con Doppler
            <div className="dp-rowflex">
              <div className="col-sm-12 col-md-6">
                <Carousel>
                  {lastPost.map((post) => (
                    <Slide>
                      <PreviewPost post={post} />
                    </Slide>
                  ))}
                </Carousel>
              </div>
              <div className="col-sm-12 col-md-6">
                <Carousel>
                  {lastPost.map((post) => (
                    <Slide>
                      <PreviewPost post={post} />
                    </Slide>
                  ))}
                </Carousel>
              </div>
            </div>
          </S.Article>
        </div>
      </div>
    </div>
  );
};
