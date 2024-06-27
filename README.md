# vue-admin

自用 vue 脚手架

## Default config

默认的配置包含了:

- vue + vite + ts, tailwindcss
- 从 0 配置的必要语法检查和格式化。
- 清除了所有默认的 css 样式；只提供了干净的唯一组件 `MainView`, 空的 `router` 和 `pinia` 状态库.
- 提供了一些有用的 `.vscode` 工程配置: `tailwindcss` 的 `@` 指令语法提示支持和 `vue` 的 `code-snippets`.
- 一些(自认为)通用的 `vite` 插件.

**代码适用于 vscode**. 必需安装的 `vsc` 插件:

- vue 官方插件
- eslint 官方插件
- tailwind 官方插件
- prettier 官方插件

> 注意本地已经存在的插件可能会覆盖掉上述插件某些功能，从而影响语法提示，进而影响食用体验。

- 可选的插件：`i18n`

## Feature

- 实现了极小的 `eventBus`
- 对 vue 本身提供的 _provide_ 和 _inject_ 进行了二次封装，使用局部上下文来代替全局状态管理；
- 开箱即用的 `axios` 的请求封装, 并支持多环境切换: `mock`, `dev`, `prod`。
- 项目提供了开箱即用的多语言支持, 内置 [`vue-i18n@9`](https://github.com/intlify/vue-i18n) 的配置。
- 项目结构目录高度标准化, 认为**约定大于配置**.

## Usage

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
pnpm lint:inspect
```
