import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore, Store } from 'redux'; 
import reduxThunk from 'redux-thunk';
import { IState, state } from './services/reducer';

// import Form from 'app/pages/Form';
// import Home from 'app/pages/Home';
import StaticApp from './StaticApp';
import LanguageProvider from './utils/translation/LanguageProvider';

const store:Store<IState> = createStore(
  state,
  compose(
      applyMiddleware(reduxThunk)
  )
)

export const initStore = (initialState:any):Store<IState> => {
  return createStore(
    state,
    initialState,
    compose(
        applyMiddleware(reduxThunk)
    )
  )
}

const App: React.StatelessComponent<{}> = () => (
  <Provider store={store}>
    <LanguageProvider>
      <BrowserRouter>
        <StaticApp />
      </BrowserRouter>
    </LanguageProvider>
  </Provider>
);

export default App;
