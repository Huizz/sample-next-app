import App, { Container } from 'next/app'
import * as React from 'react';
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from 'app/App';
import LanguageProvider from 'app/utils/translation/LanguageProvider';

interface IAppProps {
  Component: any,
  pageProps: any,
  store: any,
}

// NOTE: this file is used instead of App.tsx
class MyApp extends App<IAppProps> {
  // static async getInitialProps({ Component, ctx }) {
  //   return {
  //     pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
  //   }
  // }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <LanguageProvider>
            <Component {...pageProps} />
          </LanguageProvider>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore)(MyApp)