// combineReducers({potato: potatoReducer, tomato: tomatoReducer})

// rootReducer(state, action) {
//     return {
//         potato: potatoReducer(state.potato, action),
//         tomato: tomatoReducer(state.tomato, action)
//     }
// }

function isObject(v) {
  return Object.prototype.toString.call(v) === "[object Object]";
}

function filterUnlegalReducers(reducers) {
  if (!isObject(reducers)) {
    return null;
  }

  const legalReducers = {};

  Object.keys(reducers).forEach((key) => {
    if (typeof reducers[key] === "function") {
      legalReducers[key] = reducers[key];
    }
  });

  return Object.keys(legalReducers).length === 0 ? null : legalReducers;
}

const T = (state) => state;

export function combineReducers(reducers) {
  const legalReducers = filterUnlegalReducers(reducers);

  if (!legalReducers) {
    console.error("reducers 不合法");
    return T;
  }

  const nextState = {};
  return (state = {}, action) => {
    Object.keys(legalReducers).forEach((key) => {
      const previousSubState = state[key];
      const nextSubState = reducers[key](previousSubState, action);
      nextState[key] = nextSubState;
    });

    return nextState;
  };
}
