import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

import pluginVue from 'eslint-plugin-vue';

const ts = [
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  {
    name: 'custom-ts-config',
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  },
];

const vue = [
  ...pluginVue.configs['flat/recommended'].map((config, index) => ({
    ...config,
    files: ['**/*.vue'],
    name: `vue-eslint-official-${index}`,
  })),
];

// 禁用 eslint 部分格式化
const prettier = [
  {
    name: 'disable-eslint-formatter',
    ...eslintConfigPrettier,
  },
];

// ignore files
const ignore = [
  {
    ignores: ['.gitignore'],
  },
];

export default [
  // default
  {
    name: 'eslint-default-config',
    files: ['**/*.js', '**/*.ts'],
    ...pluginJs.configs.recommended,
  },
  ...ts,
  ...vue,
  ...prettier,
  ...ignore,
];
