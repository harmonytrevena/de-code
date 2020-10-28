import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>d e . c o d e</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'an app for when you need a moment.'} />
      </Helmet>
      <App />
    </>
  );
};
