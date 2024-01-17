import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'icoms': path.resolve(__dirname, './src/components'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'icoms-components',
            fileName: (format) => `icoms-components.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
        }
    }
});
