import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Auth from "./components/Auth.vue";
import Registration from "./components/Registration";
import Reset from "./components/Reset";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/auth", component: Auth },
  { path: "/registration", component: Registration },
  { path: "/reset", component: Reset },
];

const router = new VueRouter({
  routes, // сокращённая запись для `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
