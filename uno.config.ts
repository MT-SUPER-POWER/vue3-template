import { defineConfig, presetAttributify } from "unocss";
import { presetWind4 } from "@unocss/preset-wind4";

export default defineConfig({
  presets: [
    presetWind4({
      // 启用 Tailwind 4 兼容的 CSS reset
      preflights: { reset: true },
    }),
    presetAttributify(),
  ],
  shortcuts: [],
  rules: [
    // 自定义规则
  ],
  theme: {
    // 主题覆盖
  },
});
