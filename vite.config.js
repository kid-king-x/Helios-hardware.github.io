import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 新增的 GitHub Pages 相关配置
  base: '/Helios-hardware.github.io/', // 这是最重要的配置
  build: {
    outDir: 'docs',       // 构建输出目录
    assetsDir: './',      // 静态资源目录
    emptyOutDir: true     // 构建前清空输出目录
  }
});