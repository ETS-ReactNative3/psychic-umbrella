import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import history from "./utils/history";
import { getConfig } from "./config";

import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';

export * from "./views/Seattle/Pins"



const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};


ReactDOM.render(
  <Auth0Provider {...providerConfig}>    <App />
    </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
