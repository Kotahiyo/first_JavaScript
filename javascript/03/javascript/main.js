// 関数の代入。関数の名前をつけないことを無名関数と呼ぶ
const plus1 = function (number) {
  const result = number + 1;
  return result;
};

// 関数を変数に代入しただけ
const plus1Func = plus1;
// 関数の処理の結果を代入
const plus1Result = plus1(300);

// 関数のみがログに出力
console.log(plus1Func);
// 関数結果がログに出力
console.log(plus1Result);

// const number = 30;
// const result = plus1(number);

// console.log(result);

// // これだけだと実行されない
// function alertMessage() {
//   const text = 'テキスト';
//   alert(text);
// }

// 以下が必要
// alertMessage();
// () で関数の実行をするため、必ずつける
// alertMessage;
