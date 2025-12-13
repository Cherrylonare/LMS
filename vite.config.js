// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <--- Make sure this is imported

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@/lib/utils': path.resolve(__dirname, './src/lib/utils'),
    },
  },
  server: {
    proxy: {
      '/api':{
        target: 'http://localhost:8080',
      changeOrigin: true,
      secure: false,
    },
  },
  },
});
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'   // <-- ये जरूरी है alias के लिए

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),   // <-- ये shadcn के लिए जरूरी
//     },
//   },
//   server: {
//     proxy: {
//       '/api/v1/users': {
//         target: 'http://127.0.0.1:8080',
//         changeOrigin: true,
//         secure: false,
//         // rewrite: (path) => path.replace(/^\/api\/v1\/users/, '/api/v1/users'),
//       },
//     },
//   },
// })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   server: {
//     proxy: {
//       '/api/v1/users': {   // आपके baseUrl से exact match
//         target: 'http://127.0.0.1:8080',   // <-- यही मुख्य फिक्स!
//         changeOrigin: true,
//         secure: false,
//       },
//       // या broader:
//       // '/api': {
//       //   target: 'http://127.0.0.1:8080',
//       //   changeOrigin: true,
//       //   secure: false,
//       // }
//     },
//   },
// })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   // proxy की सारी लाइनें डिलीट कर दो – बस इतना ही रहने दो
// })