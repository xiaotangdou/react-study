/**
 * previous state: xxx
 * called action: xxx
 * next state: xxx
 */

export default function reduxLogger({ dispatch, getState }) {
  return (next) => (action) => {
    console.log("================================");
    const previousState = getState();
    console.log("previousState:", previousState);
    console.log("action:", action.type);
    const res = next(action);
    const nextState = getState();
    console.log("nextState:", nextState);
    console.log("================================");
    return res;
  };
}
