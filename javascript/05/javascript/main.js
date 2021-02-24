// // デフォルト引数
// function execute(arg = 'test') {
//   return arg;
// }

// // 関数
// const result1 = execute();
// console.log(result1);

// const result2 = execute('foo');
// console.log(result2);

// キーワード引数
function execute({ arg1, arg2 }) {
  return { arg1, arg2 };
}

const result = execute({ arg1: 'test1', arg2: 'test2' });
console.log(result);
