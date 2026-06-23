# Vue 3 Template — AI Agent Guide

## Tech Stack

| Layer           | Choice                                                                      |
| --------------- | --------------------------------------------------------------------------- |
| Framework       | **Vue 3** (Composition API, `<script setup>`)                               |
| Language        | **TypeScript** (strict mode)                                                |
| Build           | **Vite 8**                                                                  |
| Styling         | **UnoCSS** with `presetWind4` (Tailwind 4 compatible) + `presetAttributify` |
| Lint            | **ESLint** + **Prettier** (format on save)                                  |
| Package Manager | **Bun**                                                                     |

## Code Conventions

### Vue SFCs — Always Use `<script setup lang="ts">`

```vue
<script setup lang="ts">
// Composition API only. No Options API.
import { ref, computed } from "vue"

const props = defineProps<{ title: string }>()
const emit = defineEmits<{ update: [value: string] }>()
</script>

<template>
  <div class="px-4 py-2">
    {{ props.title }}
  </div>
</template>
```

- ✅ **`<script setup lang="ts">`** — always
- ✅ **`defineProps` / `defineEmits`** with type-only declarations
- ✅ **Composition API** only (no `data()`, `methods: {}`)
- ❌ No Options API, no `this.*`
- ❌ No `any` type suppression

### Styling — UnoCSS (Tailwind 4 Classes)

- Use **utility classes** directly in templates (`class="flex items-center gap-2"`)
- Use **`presetAttributify`** for cleaner attributes (`<div flex="~ col" text="center">`)
- Extract repeated patterns to **`shortcuts`** in `uno.config.ts`
- Component-scoped styles only for complex animations / overrides

### Directory Structure

```
src/
├── components/     # Shared/reusable components
│   └── HelloWorld.vue
├── views/          # Page-level components (route targets)
├── composables/    # Shared composition functions
├── services/       # API service layer
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── assets/         # Static assets (images, fonts)
├── router/         # Vue Router configuration
├── stores/         # Pinia stores (if used)
├── App.vue         # Root component
└── main.ts         # Entry point
```

## Common Tasks

### Creating a New Component

1. Place in `src/components/` (shared) or co-located with feature
2. Use `<script setup lang="ts">` + typed `defineProps`/`defineEmits`
3. Style with UnoCSS utility classes
4. Use `vue-component` skill for guided creation

### Creating a New Page

1. Place in `src/views/`
2. Wire route in `src/router/`
3. Use `vue-page` skill for guided creation

### Creating an API Service

1. Place in `src/services/`
2. Create a function-per-endpoint pattern
3. Use `api-service` skill for guided creation

## AI Agent Behavior

- Read `AGENTS.md` first to understand project conventions
- Load project skills (`.opencode/skills/`) before writing code
- Always run `bun run build` after changes to verify
- Never suppress TypeScript errors with `as any` or `@ts-ignore`
- Match existing code patterns exactly — this project is a template, consistency matters
