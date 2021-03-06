import React from 'react';
import App from 'next/app';
import wrapper from '../store/store';
import '../styles/globals.scss'
import '../styles/repos.scss'
import '../styles/events.scss'
import '../styles/users.scss'
import '../styles/emojis.scss'

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