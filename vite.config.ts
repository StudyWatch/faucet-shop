// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/faucet-shop/', // שים לב לזה
  plugins: [react()],
})
