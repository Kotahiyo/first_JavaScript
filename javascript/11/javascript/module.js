// export で読み込める状態にする
// 変数や関数、クラスを読み込める
export const number = 10;

export function plus1(number) {
  return number + 1;
}

// export default でデフォルトで読み込み
export default class Robot {
  sayHello() {
    console.log('Hello');
  }
}
