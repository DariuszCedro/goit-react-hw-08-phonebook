import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, storePersist} from './redux/store';
import { HashRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={storePersist} loading={null}>
      <HashRouter>
      <App />
      </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
