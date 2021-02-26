// 外部ファイルから 変数や関数、クラスを import (読み込むという意味)
// export default を指定している場合、{}の外に記入
import Robot, { number, plus1 } from './module.js';

console.log(number);
console.log(plus1);

const result = plus1(number);
console.log(result);

console.log(Robot);
const robot = new Robot();
robot.sayHello();
