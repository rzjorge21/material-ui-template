import { userTypes } from "../ducks/user";

const auth =  ( config = {} ) => ( store ) => ( next ) => ( action ) => {
    const ERROR_UNAUTHORIZED = 401;
    const result = next( action );
    const isFail = /(.*)_(FAIL)/.exec(action.type);
    if ( isFail && action.error.response && action.error.response.status == ERROR_UNAUTHORIZED) {                     
        return next( {
            type: userTypes.LOGOUT
        } );
    }
    return result;
};

export default auth;