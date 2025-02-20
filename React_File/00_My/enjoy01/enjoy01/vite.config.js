import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/css'), // 스타일 폴더
      '@components': path.resolve(__dirname, 'src/components'), // 컴포넌트 폴더
      '@pages': path.resolve(__dirname, 'src/pages'), // 페이지 폴더
      '@import': path.resolve(__dirname, 'src/import.js'), // import.js 별칭 추가
    },
  },
});
