import './styles/index.sass';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthStore from './stores/AuthStore';
import SubjectStore from './stores/SubjectStore';
import TestStore from './stores/TestStore';

interface State {
  storeAuth: AuthStore,
  storeSubject: SubjectStore,
  storeTest: TestStore
}

const storeAuth = new AuthStore();
const storeSubject = new SubjectStore();
const storeTest = new TestStore();


export const Context = createContext<State>({
  storeAuth,
  storeSubject,
  storeTest
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    storeAuth,
    storeSubject,
    storeTest
  }}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>
);