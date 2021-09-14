/* reducers.js */
const loadingReducer = (state = {}, action) => {
    const {type} = action;
    const matches = /(.*)_(SUCCESS|FAIL)/.exec(type);
  
    //const isRequest = action.meta && action.meta.offline
    const isRequest = action.payload && (action.payload.request || action.payload.requestBlob);
  
    if (!matches && !isRequest) return state;
  
    let requestName, isLoading;
    if (!matches) {
      requestName = type;
      isLoading = true;
    } else {
      [, requestName] = matches;
      isLoading = false;
    }
  
    return {
      ...state,
      [requestName]: isLoading,
    };
  };
  
  export default loadingReducer;
  