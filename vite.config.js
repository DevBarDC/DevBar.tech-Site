import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ],
  base: process.env.BASE_PATH || '/', // Use environment variable from workflow or fallback to '/'
});