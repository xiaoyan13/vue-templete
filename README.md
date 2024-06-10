# vue-admin

自用 vue 模板.

## Default config

默认的配置包含了:

- vue + vite + ts, tailwindcss

- 基于 [eslint-antfu](https://github.com/antfu/eslint-config) 配置的语法检查和格式化

- 清除了所有默认的 css 样式; 干净的唯一组件 MainView, 提供空的 router 和 pinia 状态库.

- 提供了一些有用的 `.vscode` 工程配置, 如 `tailwindcss` 和 vue 的 `code-snippets`。

- 一些(自认为)通用的 vite 插件.

**代码适用于 vscode**. 需要安装的 `vsc` 插件:

- vue 官方插件

- eslint 官方插件

- tailwind 官方插件

> 注意已经存在的插件可能会覆盖掉上述插件某些功能，从而影响语法提示。

## Doc

### Install

```sh
pnpm i
```

### Run

```sh
pnpm dev
```

### Lint

```sh
pnpm lint
```
