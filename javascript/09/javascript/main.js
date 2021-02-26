// 関数の基本形
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
// const plus1 = (number) => number + 1;

// const number = 10;
// const result = plus1(number);
// console.log(result);

// オブジェクトのメソッドの省略形
// 基本形
// const user = {
//   sayMyName: function () {
//     console.log('My name is Kouhei Fujii');
//   },
// };

// アロー関数
// const user = {
//   sayMyName: () => {
//     console.log('My name is Kouhei Fujii');
//   },
// };

// アロー関数の省略
// const user = {
//   sayMyName() {
//     console.log('My name is Kouhei Fujii');
//   },
// };
// user.sayMyName();

// オブジェクトの分割代入
const user = {
  name: 'fujii',
  age: 29,
  sayHello() {
    console.log('Hello');
  },
};

// user オブジェクトから分割代入
const { name, sayHello } = user;

console.log(name);
console.log(sayHello);
sayHello();
