// react modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// redux and redux-persistor
import { store, persistor } from './store/store'; // general redux store and persistor
import { Provider } from 'react-redux'; // redux provider
import { PersistGate } from 'redux-persist/integration/react'; // redux-persist provider
// components
import App from './App';
// context provider
import { PlacesProvider } from './contexts/places.context';
// general styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <PlacesProvider>
            <App />
          </PlacesProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
