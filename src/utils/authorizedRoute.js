import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadSelectors } from "../state/ducks/load";
import { userTypes } from "../state/ducks/user";

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, pending, logged, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          if (pending) {
            return (<div>Loading...</div>)
          }
          return logged ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          );
        }}
      />
    );
  }
}

const stateToProps = (state) => {
  return{
    logged: state.user.details ? true : false,
    pending: loadSelectors.getLoad(userTypes.LOGIN)(state.load)
  }
}

export default connect(stateToProps)(AuthorizedRoute);
