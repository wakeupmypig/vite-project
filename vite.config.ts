/// <reference types="vitest"/>
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import jsx from "@vitejs/plugin-vue-jsx" // 支持tsx 语法
import path from "path"

import Unocss from "unocss/vite"
import { presetUno, presetAttributify, presetIcons } from "unocss"
// vite 默认只会编译ts 不会检测ts
export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    Unocss({
      /* options */
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: "inline-flex",
            width: "2em",
            height: "2em",
            "vertical-align": "middle"
          },
          collections: {
            zf: {
              circle: `<svg  width="50" height="50"  viewBox="0 0 50 50">
                <circle  cx="25" cy="25" r="20" />
              </svg>`
            }
          }
        })
      ] // 默认使用的是windicss 支持将类名 用属性的方式来标识
      // 支持css icon
    }),
    AutoImport({
      imports: ["vue", "vue-router"]
      // eslintrc: { enabled: true }
    })
  ],
  resolve: {
    alias: [
      // 配置和rollup一样
      { find: "@", replacement: path.resolve(__dirname, "src") }
    ]
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: { web: [/.tsx$/] }
  }
})

// 思想：
// eslint 代码 prettier 风格 editconfig 配置
// eslint vscode  prettier vsode  editconfig for vscode
// 默认格式化
// 配合 git hook 实现提交代码前 先进行校验

// husky

// Atomic css 原子css
// 预处理器 scss less stylus
