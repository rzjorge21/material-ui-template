/* actions.js */
import * as types from './types';

export const throwError = () => ({
    type: types.ERROR,
    payload:{}
})

export const cleanError = () => ({
    type: types.CLEAN_ERROR,
    payload:{}
})