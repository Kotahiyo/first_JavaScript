// クラスの宣言
// class Robot {
//   // クラス内ではアローや function 表記が使えない
//   sayHello() {
//     console.log('Hello');
//   }
// }
// // インスタンスの生成
// const robot = new Robot();
// // 実行
// robot.sayHello();

// クラスの初期値設定
class Robot {
  constructor(color) {
    this.color = color;
  }
}

const robot = new Robot('red');

// ゲッター
console.log(robot.color);
// セッター
robot.color = 'blue';

console.log(robot.color);
