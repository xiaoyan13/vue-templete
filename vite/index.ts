import { fileURLToPath, URL } from 'node:url';
import plugins from './plugins';
import { ConfigEnv, defineConfig } from 'vite';
import { UserConfig } from 'vite';

const baseCfg: UserConfig = {
  plugins,
  resolve: {
    alias: {
      // use URL because ../src is browser env
      '@': fileURLToPath(new URL('../src', import.meta.url)),
    },
  },
};

const config = defineConfig(({ command, mode }: ConfigEnv) => {
  console.log(process.env.NODE_ENV);
  return baseCfg;
});

export default config;
