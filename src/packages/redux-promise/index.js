function isPromise(v) {
  return v instanceof Promise;
}

export default function reduxPromise({ dispatch }) {
  return (next) => (action) => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}
