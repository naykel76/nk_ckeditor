import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {

    // Determine if we are building the CKEditor package or the main project.
    // The mode is set via CLI: `npx vite build --mode=bundle`
    const isBundle = mode === 'bundle';

    return {
        build: {
            copyPublicDir: false, // Do not copy the public directory during the build
            chunkSizeWarningLimit: 1800, // Prevent warnings for larger chunk sizes
            
            rollupOptions: {
                input: isBundle
                    ? { 'ckeditor-build': 'src/ckeditor-build.js' } // Entry for CKEditor build
                    : { main: 'index.html' }, // Entry for the main project

                output: {
                    entryFileNames: (chunkInfo) =>
                        chunkInfo.name === 'ckeditor-build'
                            ? 'nk-ckeditor.js' // Output filename for CKEditor build
                            : '[name]-[hash].js', // Default naming for other builds

                    format: isBundle ? 'iife' : 'esm', // Use IIFE for CKEditor, ESM for the main project
                },
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true, // Suppress warnings from SCSS dependencies
                },
            },
        },
    };
});
