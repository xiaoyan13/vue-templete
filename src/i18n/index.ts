import zh from './zh.json'
import en from './en.json'
import type { App } from 'vue';
import { createI18n } from 'vue-i18n'

function getGlobalLocale() {
    return localStorage.getItem('orion-lang') || 'zh';
}

function setGlobalLocale(lang: 'zh' | 'en') {
    localStorage.setItem('orion-lang', lang);
    location.reload();
}

const i18n = createI18n({
    legacy: false, // 启用 Composition API
    locale: getGlobalLocale(),
    fallbackLocale: 'zh',
    messages: { zh, en }
});

function setupI18n(app: App) {
    app.use(i18n)
}

export { setupI18n, setGlobalLocale }

/**
 * @setupI18n 全局启用 i18n 插件。
 * 
 * @setGlobalLocale 全局设置语言。会导致页面刷新。
 */