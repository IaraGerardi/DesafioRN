export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { session: true };
    case "LOG_OUT":
      return { session: false };
    default:
        console.log('error')
      break;
  }
};
