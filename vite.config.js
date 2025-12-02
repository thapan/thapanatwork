import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable JSX in .js files since the project uses that convention
      include: [/\.jsx?$/, /\.tsx?$/],
    }),
  ],
  base: "/thapan-work/",
  esbuild: {
    loader: "jsx",
    include: /.*\.[jt]sx?$/,
    exclude: [/node_modules/, /vite\.config\.js/],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/components/portfolio': path.resolve(__dirname, 'components/portfolio')
    }
  }
})
