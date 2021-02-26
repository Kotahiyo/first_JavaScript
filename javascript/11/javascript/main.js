// 外部ファイルから 変数や関数、クラスを import (読み込むという意味)
// export default を指定している場合、{}の外に記入
// import Robot, { number, plus1 } from './module.js';

// console.log(number);
// console.log(plus1);

// const result = plus1(number);
// console.log(result);

// console.log(Robot);
// const robot = new Robot();
// robot.sayHello();

// * を使用した読み込み方
// as を指定して名前を変更できる
// import * as module from './module.js';

// // console.log(module);

// // module(設定した名前。なんでもOK)から変数や関数を定義
// const { number, plus1 } = module;

// console.log(number);
// console.log(plus1);

// as について
// number を num に変更するように指定
import Robot, { number as num, plus1 } from './module.js';

console.log(num);
