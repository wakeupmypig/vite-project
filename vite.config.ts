import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// vite 默认只会编译ts 不会检测ts
export default defineConfig({
  plugins: [vue()]
})

// 思想：
// eslint 代码 prettier 风格 editconfig 配置
// eslint vscode  prettier vsode  editconfig for vscode
// 默认格式化
// 配合 git hook 实现提交代码前 先进行校验

// husky
