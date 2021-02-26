// 関数の基本系
// function plus1(number) {
//   return number + 1;
// }

// 無名関数として変数への代入
// const plus1 = function (number) {
//   return number + 1;
// };

// 無名関数の場合、アロー関数が使える
// const plus1 = (number) => {
//   return number + 1;
// };

// シンプルな関数の場合、1行にまとめられる
const plus1 = (number) => number + 1;

const number = 10;
const result = plus1(number);
console.log(result);
