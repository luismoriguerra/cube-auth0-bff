import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-9k50c76d.us.auth0.com"
      clientId="642LkVJ5KzSoH8gThpU18xKFf03adhjN"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-9k50c76d.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
