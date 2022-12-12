import { createApp } from "vue";
//import Vue from 'vue';
import App from "./App.vue";
//import VueRouter from 'vue-router';
import router from "./router";

//Vue.use(VueRouter);

createApp(App).use(router).mount("#app");
