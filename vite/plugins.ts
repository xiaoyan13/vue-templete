import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import { visualizer } from 'rollup-plugin-visualizer';

const plugins: PluginOption[] = [
  vue(),
  vueJsx(),
  // https://github.com/unplugin/unplugin-auto-import
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, // .vue
    ],
    imports: ['vue', 'vue-router'],
    dts: 'src/typings/auto-imports.d.ts',
  }),
  // https://github.com/btd/rollup-plugin-visualizer
  visualizer({ open: true }), // 自动开启分析页面
];

export default plugins;
