import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ui from '@/UI'
import '@/assets/scss/main.scss';

const app = createApp(App)

ui.forEach((component) => {
  app.component(component.name, component)
});

app
  .use(store)
  .use(router)
  .mount('#app')
