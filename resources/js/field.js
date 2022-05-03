Nova.booting((Vue, router) => {
  Vue.component("index-resource-index-link", require("./components/IndexField").default);
  Vue.component("detail-resource-index-link", require("./components/DetailField").default);
  Vue.component("form-resource-index-link", require("./components/FormField").default);
});
