/* selectors.js */
export const getError = (actions) => (error) => {
    const errors = actions.map(action => error[action]);
    if (errors && errors[0]) {
        return errors[0];
    }
    return null;
};