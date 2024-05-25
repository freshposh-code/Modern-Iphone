import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "posh-association",
    project: "iphone-clone"
  })
  ],

  build: {
    sourcemap: true
  },
  server: {
    port: 3000,
    mimeTypes: {
      'application/javascript': ['js']
    }
  }
})
