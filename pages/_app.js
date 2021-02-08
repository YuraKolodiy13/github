import React from 'react';
import App from 'next/app';
import wrapper from '../store/store';

class MyApp extends App {
  static getInitialProps = async ({Component, ctx}) => {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        pathname: ctx.pathname,
      },
    };
  };

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}

export default wrapper.withRedux(MyApp);