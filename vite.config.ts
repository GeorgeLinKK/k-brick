import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `assets/unocss.css`,
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    // 添加UnoCSS插件
    Unocss(),
  ],
  test: {
    globals: true,
    // 测试是在node环境运行的，不是浏览器，happy-dom用于测试时dom仿真
    environment: "happy-dom",
    // 支持tsx/jsx组件
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    rollupOptions,
    minify: false,
    // 是否要独立输出 css
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "KBrick",
      fileName: "k-brick",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
  },
});
