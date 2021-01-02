/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from "react";
import Oidc from "oidc-client";
// import { AuthProvider } from "oidc-react";
import { Helmet } from "react-helmet-async";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "styles/global-styles";

// import { HomePage } from "./containers/HomePage/Loadable";
import { RequestDO } from "./containers/DO/Loadable";
import { Companies } from "./containers/Companies/Loadable";
import { NotFoundPage } from "./components/NotFoundPage/Loadable";
import { Sidebar } from "./components/Sidebar/Loadable";
import { Header } from "./components/Header/Loadable";

import config from "../config";
import PageOf from "./containers/PageOf";

// const oidcConfig = {
//   authority: config.urls.identityServer,
//   redirectUri: config.app.url!.concat("/"),
//   clientId: config.app.id,
//   responseType: "code",
//   scope: "openid profile god"
// };

export function App() {
  if (config.app.isDevelopment) {
    Oidc.Log.level = Oidc.Log.DEBUG;
    Oidc.Log.logger = console;
  } else {
    Oidc.Log.level = Oidc.Log.ERROR;
  }

  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s | Go-Logs" defaultTitle="Go-Logs">
        <meta name="description" content="Go-Logs application" />
      </Helmet>

      {/* <AuthProvider {...oidcConfig}> */}
      <Sidebar />
      <Header />
      <Switch>
        <Route exact path="/" component={RequestDO} />
        <Route
          exact
          strict
          path={["/companies/:id(\\d+)/:action*", "/companies/:id(\\d+)?"]}
          component={PageOf(Companies)}
        />
        <Route component={NotFoundPage} />
      </Switch>
      {/* </AuthProvider> */}
      <GlobalStyle />
    </BrowserRouter>
  );
}
