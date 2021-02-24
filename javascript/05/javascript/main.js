// デフォルト引数
function execute(arg = 'test') {
  return arg;
}

// 関数
const result1 = execute();
console.log(result1);

const result2 = execute('foo');
console.log(result2);
