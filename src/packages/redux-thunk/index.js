// export default function reduxThunk({ dispatch, getState }) {
//   return (next) => (action) => {
//     if (typeof action === "function") {
//       return action(dispatch, getState);
//     }

//     return next(action);
//   };
// }

export default function reduxThunk({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (typeof action === "function") {
        return action(dispatch, getState);
      }

      return next(action);
    };
  };
}
