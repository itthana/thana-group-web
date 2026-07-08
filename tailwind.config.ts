import type { Config } from 'tailwindcss'

const config: Config = {
  // บรรทัดนี้สำคัญมาก! เป็นการชี้เป้าให้ Tailwind รู้ว่าจะต้องไปดึงสไตล์จากไฟล์ไหนบ้าง
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config