/* reducers.js */
import {combineReducers} from 'redux';
import * as types from './types';
import {createReducer as createReducerToolkit} from '@reduxjs/toolkit';

const errorReducer = (state = {}, action) => {
  const {type} = action;
  if(type == types.CLEAN_ERROR){
    return {}
  }
  const matches = /(.*)_(SUCCESS|FAIL)/.exec(type);
  const isRequest =
    action.payload && (action.payload.request || action.payload.requestBlob);
  if (!matches && !isRequest) return state;

  let requestName, requestState, errorMessage, error;
  if (!matches) {
    requestName = type;
    errorMessage = null;
  } else {
    [, requestName, requestState] = matches;
    if (requestState === 'SUCCESS') return state;

    error = action.error;
    /*errorMessage = {
            status: 500,
            message: ""
        };
        switch(error.status){
            case 401:
                errorMessage.message = error.response.data.error;
                break;
            case 500:
                errorMessage.message = error.response.status;
                break;
            default:
                errorMessage = error.response.data;
        }*/
    /*if (error.response) {
            console.log(error.response);//TODO remove on production
            errorMessage.status = error.response.status
        }else{
            errorMessage.status = error.status
            errorMessage.message = error.message;
        }*/
  }

  return {
    ...state,
    [requestName]: error,
  };
};

export default errorReducer;