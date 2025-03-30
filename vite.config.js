import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/yraghuram/", // Ensure the correct base path for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    // Explicitly optimize these dependencies if needed
    include: ['framer-motion', '@emailjs/browser', 'swiper', 'react-modal'],
    exclude: ['framer-motion', 'swiper'], // Exclude problematic dependencies from Vite optimization
  },
  build: {
    commonjsOptions: {
      // This ensures mixed ES module types are handled during build
      transformMixedEsModules: true,
    },
  },
});
