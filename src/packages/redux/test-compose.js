// const testArray = [1, 2, 3, 4];

// testArray.reduce((accumulator, currentValue) => {
//   console.log("accumulator >>>", accumulator);
//   console.log("currentValue >>>", currentValue);
//   return accumulator + currentValue;
// }, 0);

function add1(args) {
  console.log("add1", args);
  return args;
}

function add2(args) {
  console.log("add2", args);
  return args;
}

function add3(args) {
  console.log("add3", args);
  return args;
}

add1(add2(add3())); // 3 2 1
compose(add1, add2, add3)("arg"); // 3 2 1;

/**
 * 洋葱模型：函数从后向前执行，并把当前函数的执行结果作为下一个函数的参数
 * step1: add1 add2
 * return: (...args) => add1(add2(...args))
 * step2: (...args) => add1(add2(...args)) add3
 * return: (...args) => ((...args) => add1(add2(...args)))(add3(...args))
 */
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
