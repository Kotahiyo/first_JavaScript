var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: false,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Javascript 学んで" },
      { text: "Vue 学んで" },
      { text: "Rails 学ぶ" },
    ],
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "こんにちは！ Vue.js の練習中です！",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    alertClick: function () {
      alert("アラート出します！");
    },
  },
});

var ap6 = new Vue({
  el: "#app-6",
  data: {
    message: "今日テャ！",
  },
});
