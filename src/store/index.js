import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "../packages/redux";
import reduxThunk from "../packages/redux-thunk";
import reduxPromise from "../packages/redux-promise";
import reduxLogger from "../packages/redux-logger";

function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "MINUS":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

function counter2(state = { count: 0 }, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "MINUS":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default createStore(
  combineReducers({ counter, counter2 }),
  applyMiddleware(reduxThunk, reduxPromise, reduxLogger)
);
