import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        build: {
            copyPublicDir: false, // disable copying the public directory
            chunkSizeWarningLimit: 1800, // Increase the chunk size warning limit to avoid warnings for larger bundles
        },
        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true, // Prevent SCSS warnings for unused dependencies
                },
            },
        },
    };
});

