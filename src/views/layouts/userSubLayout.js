import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { UserNav } from "../../components";

// Sub Layouts
import { BrowseUsersPage, AddUserPage, UserProfilePage } from "../pages";

export default function UserSubLayout({ match }) {
  return (
    <div className="user-sub-layout">
      <aside>
        <UserNav />
      </aside>
      <div className="primary-content">
        <Switch>
          <Route path={match.path} exact component={BrowseUsersPage} />
          <Route path={`${match.path}/add`} exact component={AddUserPage} />
          <Route path={`${match.path}/:userId`} component={UserProfilePage} />
        </Switch>
      </div>
    </div>
  );
}