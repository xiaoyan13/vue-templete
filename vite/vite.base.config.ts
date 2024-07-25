import type { UserConfig } from 'vite';
import plugins from './plugins';
import path from 'node:path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const baseCfg: UserConfig = {
  plugins,
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
  // 指定用于加载 .env 文件的目录
  envDir: path.resolve(process.cwd(), './env'),
  css: {
    // 指定 postcss 处理 tailwindcss 规则
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
    devSourcemap: true,
  },
};

export default baseCfg;
