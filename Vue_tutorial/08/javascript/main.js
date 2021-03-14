Vue.component("blog-post", {
  props: ["title"],
  template: "<h3> {{ title }} </h3>",
});

new Vue({
  el: "#app",
  data: {
    posts: [
      { id: 0, title: "最初のタイトルです" },
      { id: 1, title: "2つ目のタイトルです" },
      { id: 2, title: "3つ目のタイトルです" },
    ],
  },
});
