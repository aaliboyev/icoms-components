import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'icoms': path.resolve(__dirname, './src/components'),
        },
    },
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'icoms-components',
            fileName: (format) => `icoms-components.${format}.js`
        },
        rollupOptions: {
            input: 'src/index.ts',
            external: ['react', 'react-dom'],
            output: [
                {
                    format: 'cjs',
                    dir: 'dist',
                    entryFileNames: '[name].cjs'
                },
                {
                    format: 'esm',
                    dir: 'dist',
                    entryFileNames: '[name].esm.js'
                }
            ],
            plugins: [
                typescript({ tsconfig: './tsconfig.json' })
            ]
        }
    }
});
