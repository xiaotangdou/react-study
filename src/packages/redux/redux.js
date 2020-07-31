/**
 * 1、接收修改数据规则的reducer
 * 2、返回store对象
 *  只能由dispatch修改数据
 */

export default function createStore(reducer) {
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
