function greeting() {
  console.log('バイバイ！');
}

console.log('こんにちは！');

setTimeout(greeting, 3000);

console.log('また会おうね！');
// 結果
// こんにちは！
// また会おうね！
// バイバイ！
