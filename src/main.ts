import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'
import { setupRouter } from './router'
import { setupPinia } from './stores'
import { setupI18n } from './i18n'

function bootstrap() {
    const app = createApp(App)
    // setup plugins
    setupPinia(app);
    setupRouter(app);
    setupI18n(app)
    // mount to '#app'
    app.mount('#app')
}

bootstrap();
