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
  // Match GitHub Pages repo name for correct asset paths
  base: "/thapanatwork/",
  esbuild: {
    // Treat .js files as JSX across the project
    loader: "jsx",
    jsx: "automatic",
    include: /\.[jt]sx?$/,
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
