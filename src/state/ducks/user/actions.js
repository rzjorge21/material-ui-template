/* actions.js */
import * as types from "./types";

export const login = ( email, password ) => ( {
    type: types.LOGIN,
    payload: {
        client: 'default',
        request:{
            url: "/pla_users/login/",
            method: 'post',
            data: {
                "email": email,
                "password": password
            }
        }
    }
} );

export const logout = (  ) => ( {
    type: types.LOGOUT,
    payload: { }
} );
