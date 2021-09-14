/* reducers.js */
import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "../../utils";
import { createReducer as createReducerToolkit } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

const userReducer = createReducer(null)({
  [types.LOGIN_SUCCESS]: (state, action) => {
    let data = action.payload.data;

    let toReturn = {};
    toReturn.authentication = `Bearer ${data.auth_token}`;
    toReturn.navigation = data.navigation;
    toReturn.userData = data.user;

    return toReturn;
    //state = toReturn
  },
});

export default combineReducers({
  details: userReducer,
});

export const authReducer =
  (appReducer) =>
  (state = {}, action) => {
    if (action.type === types.LOGOUT) {
      storage.removeItem("persist:root");
      let errors = state.error;
      state = undefined;
      state = { error: errors };
    }
    return appReducer(state, action);
  };

// export const authReducer = (appReducer) => (state = {}, action) => {
//     if(action.type === types.LOGOUT){
//         state = undefined;
//         purgeStoredState(persistConfig)
//     }
//     return appReducer(state, action);
// };
