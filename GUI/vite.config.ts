import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    build: { outDir: '../Backend/API/wwwroot' },
    server: {
        port: 3000,
    },
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            devOptions: {
                enabled: true,
            },

            manifest: {
                name: 'ARMS - Admin',
                short_name: 'ARMS',
                description: 'ARMS Admin Application',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: '/assets/icon.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/icon192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/icon.png',
                        sizes: '512x512',
                        type: 'any',
                    },
                    {
                        src: '/assets/icon.png',
                        sizes: '512x512',
                        type: 'maskable',
                    },
                ],
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
                clientsClaim: true,
                skipWaiting: true,
            },
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setupTest.ts',
        isolate: true,
        testTimeout: 600000,

        fileParallelism: true,
        maxConcurrency: 2,
        allowOnly: false,
        include: ["src/**/*.test.{ts,tsx}"],

        poolOptions: {
            threads: { singleThread: false },
        },
    },
});
