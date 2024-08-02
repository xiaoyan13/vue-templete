/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HTTP_MODE: 'development' | 'debug' | 'production';
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
