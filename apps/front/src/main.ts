import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: () => import("./components/Playlists.vue"),
    },
    {
      path: "/playlist/:id",
      component: () => import("./components/TrackList.vue"),
    },
  ],
  history: createWebHistory(),
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
