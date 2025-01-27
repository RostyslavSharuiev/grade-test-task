import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import { languages, defaultLocale } from './i18n';

import App from './App.vue';

import '@/styles/style.css';

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'uk',
  locale: defaultLocale,
  messages,
});

const app = createApp(App);

app.use(i18n);

app.mount('#app');
