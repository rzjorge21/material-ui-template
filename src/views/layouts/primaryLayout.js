import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PrimaryHeader } from "../../components";
import { AppHomePage } from "../pages";

//Sub Layouts
import UserSubLayout from "./userSubLayout";
import ProductSubLayout from "./productSubLayout";

export default function PrimaryLayout({ match }) {
  return (
    <div className="primary-layout">
      <PrimaryHeader />
      <main>
        <Switch>
          <Route path={`${match.path}`} exact component={AppHomePage} />
          <Route path={`${match.path}/users`} component={UserSubLayout} />
          <Route path={`${match.path}/products`} component={ProductSubLayout} />
          <Redirect to={`${match.url}`} />
        </Switch>
      </main>
    </div>
  );
}
