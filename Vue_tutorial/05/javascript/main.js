var vm = new Vue({
  el: "#app",
  data: {
    msg: "私の名前はこうへいです",
  },
  computed: {
    reversedMsg: function () {
      return this.msg.split("").reverse().join("");
    },
  },
});

// コンソールログで出力確認
console.log(vm.reversedMsg);
vm.msg = "また会いましょう";
console.log(vm.reversedMsg);
