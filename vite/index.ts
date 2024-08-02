import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import viteBaseConfig from './vite.base.config';
import viteDevConfig from './vite.dev.config';
import viteProdConfig from './vite.prod.config';
import path from 'path';

type Mode = 'development' | 'production';

const configMap = {
  development: { ...viteBaseConfig, ...viteDevConfig },
  production: { ...viteBaseConfig, ...viteProdConfig },
};

const config = defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  /**
   * type of mode: 'development' | 'production'
   */
  const env = loadEnv(mode, path.resolve(process.cwd(), './env'), '');
  console.log(env.NODE_ENV);
  return configMap[mode as Mode];
});

export default config;
