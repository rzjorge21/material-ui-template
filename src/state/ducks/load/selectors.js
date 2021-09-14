/* selectors.js */
export const getLoad = (action) => (load) => {
  if (load[action]) {
    return load[action];
  }
  return false;
};

export const getNameLoad = (action) => (load) => {
  if (load[action]) {
    let toReturn = "";
    switch (action.toString()) {
      case "user/LOGIN":
        toReturn = "Ingresando al sistema";
        break;
      case "user/GET_SAVED_RESTURANTS":
        toReturn = "Ingresando al sistema";
        break;
    }
    return toReturn;
  }
  return "";
};
