import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { MockBrowser, AuthorizedRoute } from "../../utils";
//import store from "../../state";
import getConfigureStore from "../../state/store";

import UnauthorizedLayout from "./unauthorizedLayout";
import PrimaryLayout from "./primaryLayout";
import { PersistGate } from "redux-persist/integration/react";

const configStore = {
  usePersist: true,
  useLogger: true, //TODO set to false in production
};

const { store, persistor } = getConfigureStore({}, configStore);

export default function App(props) {
  if (configStore.usePersist) {
    return (
      <PersistGate loading={() => (<div><p>Loading</p></div>)} persistor={persistor}>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <div>
              <style>{`body {margin: 0px;padding: 0px;}`}</style>
              {/* <MockBrowser /> */}
              <Switch>
                <Route path="/auth" component={UnauthorizedLayout} />
                <Route path="/app" component={PrimaryLayout} />
                {/* <AuthorizedRoute path="/app" component={PrimaryLayout} /> */}
                <Redirect to="/auth" />
              </Switch>
            </div>
          </BrowserRouter>
        </ReduxProvider>
      </PersistGate>
    );
  }
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <div>
          <style>{`body {margin: 0px;padding: 0px;}`}</style>
          {/* <MockBrowser /> TODO, cambiar PrimaryLayout por UnauthorizedLayout*/}
          <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/app" component={PrimaryLayout} />
            <Redirect to="/auth" />
          </Switch>
        </div>
      </BrowserRouter>
    </ReduxProvider>
  );
}
