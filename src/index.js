import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import { getConfig } from "./config";
import GroupContextProvider from "./contexts/GroupContext";
import MentorContextProvider from "./contexts/MentorContext";
import StudentContextProvider from "./contexts/StudentContext";
import ModuleContextProvider from "./contexts/ModuleContext";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <ModuleContextProvider>
      <StudentContextProvider>
        <MentorContextProvider>
          <GroupContextProvider>
            <App />
          </GroupContextProvider>
        </MentorContextProvider>
      </StudentContextProvider>
    </ModuleContextProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
