/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'svea-bus',
      fileName: 'svea-bus',
    },
    sourcemap: true,
  },
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    benchmark: {

    }
  },
});
