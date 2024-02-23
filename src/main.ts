import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/main.css';

import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.config.globalProperties.window = window.history;

app.use(createPinia());
app.use(router);

app.mount('#app');
