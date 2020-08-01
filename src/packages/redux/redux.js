/**
 * 1、接收修改数据规则的reducer
 * 2、返回store对象
 *  只能由dispatch修改数据
 */

export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function subscribe(vm) {
    listeners.push(vm);
  }

  /**
   *
   * @param {object} options { type: string, payload: any}
   */
  function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach((vm) => {
      vm.forceUpdate();
    });
  }

  dispatch({ type: "XXXXXX" });

  return { getState, dispatch, subscribe };
}

export function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };
    const middlewareChain = middlewares.map((middleware) => middleware(midApi));
    dispatch = compose(...middlewareChain)(store.dispatch);
    return { ...store, dispatch };
  };
}

function compose(...opts) {
  if (opts.length === 0) {
    return () => {};
  }

  if (opts.length === 1) {
    return opts[0];
  }

  return opts.reduce((accumulator, currentValue) => {
    return (...args) => accumulator(currentValue(...args));
  });
}
