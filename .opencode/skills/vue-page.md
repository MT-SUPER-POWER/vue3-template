# Vue 3 Page Creation Skill

Use this skill when creating **new page-level components** with routing.

## Requirements

### 1. Create the Page Component
Place in `src/views/` — same conventions as `vue-component` skill:
- `<script setup lang="ts">`
- Typed `defineProps`/`defineEmits` (for route params / page-level events)
- UnoCSS utility classes for layout

### 2. Wire the Route in `src/router/`

### 3. Example Page
```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(true)
const data = ref<unknown>(null)

onMounted(async () => {
  try {
    // Fetch data
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-8">
    <h1 class="text-3xl font-bold">Page Title</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- page content -->
    </div>
  </div>
</template>
```

## Do NOT
- Co-locate pages outside `src/views/` without a strong reason
- Put data-fetching logic directly in components — use composables or services
- Skip loading / empty / error states

## Verify
- Route is properly typed and registered
- `bun run build` passes
