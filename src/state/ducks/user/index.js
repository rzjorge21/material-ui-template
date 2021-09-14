/* index.js */
import { default as reducer, authReducer } from "./reducers";

import * as userOperators from "./operators";
import * as userTypes from "./types";

export {
    userOperators,
    userTypes,
    authReducer
};

export default reducer;
