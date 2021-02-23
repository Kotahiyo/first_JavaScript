// window オブジェクト
// window.console.log('test');

// window.alert('tewst');

// DOM の取得
// const element = document.getElementsByClassName('foo');
// console.log(element);
const element = document.getElementById('bar');
console.log(element);

// DOM の操作
// element.innerText = 'testだよ';

// 新しくPタグを作成し、変数に格納
// const newLine = document.createElement('p');
// Pタグに新しくコメントを追加
// newLine.innerText = '新しい行です';
// どこに出力するか指定
// element.appendChild(newLine);

// 変数に格納
const clickAlert = function () {
  alert('アラートだよ！');
  console.log('押したら出力される');
};

const clickComment = function () {
  const newComment = document.createElement('div');
  newComment.innerText = '押したら出力される';
  element.appendChild(newComment);
};

// EventListener
element.addEventListener('click', clickComment);
