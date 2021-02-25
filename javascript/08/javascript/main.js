// 繰り返し処理
const numbers = [1, 2, 3];

// // numbers.forEach(function (num) {
// //   console.log(num * 2);
// // });

// // アロー関数
// numbers.forEach((num) => {
//   console.log(num * 2);
// });
// // 無名関数の時に上記の記述ができることに注意

// map の使い方
const result = numbers.map((num) => {
  // 戻り値を指定してあげることに注意
  return num * 2;
});

console.log(result);
