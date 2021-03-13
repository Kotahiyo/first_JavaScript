var data = { a: 1 };
var vm = new Vue({
  el: "#app",
  data: data,
});

console.log(vm.$data === data); // true

console.log(vm.$el === document.getElementById("app")); // true

// $watch はインスタンスメソッドです
vm.$watch("a", function (newValue, oldValue) {
  // このコールバックは `vm.a` の値が変わる時に呼ばれます
  console.log("変更した a: %s, 以前の a: %s", newValue, oldValue);
});
