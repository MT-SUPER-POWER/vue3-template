# Vue 3 Component Creation Skill

Use this skill when creating **new Vue 3 components**.

## Requirements

### Structure
```vue
<script setup lang="ts">
// 1. Imports (Vue, then composables, then components)
import { ref, computed } from 'vue'

// 2. Props & Emits (typed)
const props = defineProps<{
  title: string
  items?: string[]
}>()

const emit = defineEmits<{
  click: [id: string]
  update: [value: string]
}>()

// 3. Reactive state
const count = ref(0)

// 4. Computed
const doubled = computed(() => count.value * 2)

// 5. Methods / handlers
function handleClick() {
  emit('click', 'foo')
}

// 6. Lifecycle (if needed)
// onMounted(() => { ... })
</script>

<template>
  <div class="rounded-lg bg-white p-4 shadow-sm">
    <h2 class="text-lg font-semibold">{{ title }}</h2>
    <button
      class="mt-2 rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
      @click="handleClick"
    >
      Click me
    </button>
  </div>
</template>
```

### File Placement
- **Shared/reusable** → `src/components/`
- **Feature-scoped** → co-locate with feature directory
- **Only one component per file** (unless tightly coupled helper)

## Do NOT
- Use Options API (`data()`, `methods: {}`, `this.*`)
- Suppress types with `as any`
- Write scoped CSS when utils classes suffice
- Create files over 250 lines — split into sub-components

## Verify
- `lsp_diagnostics` clean on the new file
- `bun run build` passes
