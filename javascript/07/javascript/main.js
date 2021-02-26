// // 配列の取り扱い
// const numbers = [1, 2, 3];
// console.log(numbers);

// // 追加
// numbers.push(10);
// console.log(numbers);

// // 更新
// numbers[0] = 5;
// console.log(numbers);

// // 削除
// numbers.splice(2, 3);
// console.log(numbers);

// // splice 別の使い方
// numbers.splice(1, 0, '値を加える');
// console.log(numbers);

// numbers.splice(2, 1, '値を変更する');
// console.log(numbers);

// スプレット演算子
// const numbers = [1, 2, 3];

// NaN と出力
// console.log(Math.max(numbers));
// 正しく出力される
// console.log(Math.max(...numbers));

// スプレット演算子は配列を繋げることが出来る
const numbers1 = [1, 2, 3];
const numbers2 = [20, 30, 40];

// 出力結果    1,2,320,30,40
console.log(numbers1 + numbers2);

// 出力結果    (2) [Array(3), Array(3)]0: (3) [1, 2, 3]1: (3) [20, 30, 40]length: 2__proto__: Array(0)
console.log([numbers1, numbers2]);

// 出力結果    [1, 2, 3, 20, 30, 40]
console.log([...numbers1, ...numbers2]);
