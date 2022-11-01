import { createApp } from 'vue';
import App from './App.vue';
import GridLayout from 'vue3-drr-grid-layout';
import 'vue3-drr-grid-layout/dist/style.css';

const app = createApp(App);

app.use(GridLayout);

app.mount('#app');
