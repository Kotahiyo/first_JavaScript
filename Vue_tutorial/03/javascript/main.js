// オブジェクト
var data = {
  a: 1,
  b: null,
};

// インスタンス
var vm = new Vue({
  data: data,
});

console.log(vm.a == data.a);

vm.a = 2;
console.log(data.a); // => 2

data.a = 3;
console.log(vm.a); // => 3
