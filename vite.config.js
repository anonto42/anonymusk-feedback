import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/admin':{
        target:'https://backend-three-khaki-96.vercel.app/api/',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/admin/, '/admin')
      }
    }
  }
})
