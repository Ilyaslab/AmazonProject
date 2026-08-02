import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
     // @ts-expect-error - babel property type missing in Vite plugin
    babel: {
    plugins: [['babel-plugin-react-compiler', { target: '19' }]],
  },
}),
    
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico"],
        devOptions: {
      enabled: true
      },
        manifest: {
          name: "My Store",
          short_name: "Store",
          description: "My React PWA Store",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          start_url: "/",
  
          icons: [
            {
              src: "/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],

     server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
      "/images": {
        target: "http://localhost:3000",
      },
    },
  },
})
