// // if 文の基礎
// const number = 11;

// if (number > 10) {
//   console.log('10 より大きいよ');
// } else if (number === 10) {
//   console.log('10 だよ');
// } else {
//   console.log('10 未満だよ');
// }

// 真偽判定
// const val = null;
// // JavaScript で偽になるのは false, NaN, null, 0, undefined
// if (val) {
//   console.log('真だよ');
// } else {
//   console.log('偽だよ');
// }

// switch 文
const favoriteFruit = 'りんご';
// break は処理を終了するという宣言。
// 入れ忘れると break 宣言がされているところまで処理が続いてしまう
switch (favoriteFruit) {
  case 'りんご':
    console.log('りんごが好き');
    break;
  case 'みかん':
    console.log('みかんが好き');
    break;
  case '桃':
    console.log('桃が好き');
    break;
  case 'バナナ':
    console.log('バナナが好き');
    break;
  default:
    console.log('他の果物が好き');
}
