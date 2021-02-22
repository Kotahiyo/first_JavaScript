function plus1(number) {
  const result = number + 1;
  return result;
}
const number = 30;
const result = plus1(number);

console.log(result);

// これだけだと実行されない
function alertMessage() {
  const text = 'テキスト';
  alert(text);
}

// 以下が必要
// alertMessage();
// () で関数の実行をするため、必ずつける
// alertMessage;
