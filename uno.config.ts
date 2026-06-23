import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  shortcuts: [
    // 常用工具类快捷方式
    ['flex-center', 'flex items-center justify-center'],
    ['glass', 'backdrop-blur-xl bg-white/10 border border-white/20'],
  ],
})
