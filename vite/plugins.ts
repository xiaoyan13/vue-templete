import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { compression } from 'vite-plugin-compression2';

const plugins: PluginOption[] = [
  vue(),
  vueJsx(),

  // @see https://github.com/unplugin/unplugin-auto-import
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, // .vue
    ],
    imports: ['vue', 'vue-router'],
    dts: 'src/typings/auto-imports.d.ts',
  }),

  // @see https://github.com/nonzzz/vite-plugin-compression
  compression(),
  // @see https://github.com/btd/rollup-plugin-visualizer
  visualizer({ open: true }),
];

export default plugins;
