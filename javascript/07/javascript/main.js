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
const numbers = [1, 2, 3];

// NaN と出力
console.log(Math.max(numbers));
// 正しく出力される
console.log(Math.max(...numbers));
