// 繰り返し処理
// const numbers = [1, 2, 3];

// // numbers.forEach(function (num) {
// //   console.log(num * 2);
// // });

// // アロー関数
// numbers.forEach((num) => {
//   console.log(num * 2);
// });
// // 無名関数の時に上記の記述ができることに注意

// map の使い方
// const result = numbers.map((num) => {
//   戻り値を指定してあげることに注意
//   return num * 2;
// });

// console.log(result);

// オブジェクトの繰り返し文
const user = {
  name: 'fujii',
  age: 29,
};
// // オブジェクトのキーを取り出している
// const keys = Object.keys(user);

// keys.forEach((key) => {
//   console.log(key);
//   // key と value を持っているもの = オブジェクト
//   // オブジェクト[key] と指定すると value が取り出せる
//   // 以下では user["name"], user["age"] と同じ意味
//   const value = user[key];
//   console.log(value);
// });

// for ...in で取り出す
for (let key in user) {
  const value = user[key];
  console.log(`${key}: ${value}`);
}
