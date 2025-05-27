import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/', //Add this line to support clean URLs on hosting
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    historyApiFallback: true  // Optional, more relevant for dev server
  }
});
