import { defineConfig, presetAttributify } from 'unocss'
import { presetWind4 } from '@unocss/preset-wind4'

export default defineConfig({
  presets: [
    presetWind4({
      // 启用 Tailwind 4 兼容的 CSS reset
      preflights: { reset: true },
    }),
    presetAttributify(),
  ],
  shortcuts: [
    // 常用工具类快捷方式
    ['flex-center', 'flex items-center justify-center'],
    ['glass', 'backdrop-blur-xl bg-white/10 border border-white/20'],
  ],
  rules: [
    // 自定义规则
  ],
  theme: {
    // 主题覆盖
    colors: {
      brand: {
        primary: '#4f46e5',
        secondary: '#7c3aed',
      },
    },
  },
})
