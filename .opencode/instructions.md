# Project Instructions for AI Agent

## First Reads
- `AGENTS.md` — project conventions and tech stack
- `uno.config.ts` — styling system and design tokens
- `package.json` — available scripts and dependencies

## Workflow Rules

### Before Writing Code
1. Load the relevant project skill (e.g. `vue-component`, `vue-page`, `api-service`)
2. Check existing files in the target directory for pattern reference

### Code Quality
- Run `bun run build` after any change to verify correctness
- TypeScript strict mode is **enforced** — no `as any`, no `@ts-ignore`, no `@ts-expect-error`
- ESLint + Prettier are configured — format output matches these tools

### Working with UnoCSS
- Use Tailwind 4 class names (e.g. `flex`, `grid-cols-3`, `gap-4`, `p-4`, `text-lg`)
- `presetAttributify` is enabled — prefer `<div flex="~ col">` over `<div class="flex flex-col">` when it reads cleaner
- Common shortcuts are defined in `uno.config.ts` (e.g. `flex-center`, `glass`)

## Communication Style
- Be concise. Do not explain code unless asked.
- Surface concerns when a design decision contradicts project conventions.
- No flattery, no status updates. Use todos for progress tracking.
