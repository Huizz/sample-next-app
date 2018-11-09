import App, { Container } from 'next/app'
import * as React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore, Store } from 'redux'; 
import reduxThunk from 'redux-thunk';
import withRedux from 'next-redux-wrapper';

// import { initStore } from 'app/App';
import LanguageProvider from 'app/utils/translation/LanguageProvider';
import { IState, state } from 'app/services/reducer';

interface IAppProps {
  Component: any,
  pageProps: any,
  store: any,
}

const initStore = (initialState:any):Store<IState> => {
  return createStore(
    state,
    initialState,
    compose(
        applyMiddleware(reduxThunk)
    )
  )
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