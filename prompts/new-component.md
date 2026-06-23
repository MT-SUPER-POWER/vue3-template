# Create a New Vue 3 Component

## Context

You are working on the Vue 3 template project. Read `AGENTS.md` first for conventions.

## Task

Create a new component: **[COMPONENT_NAME]**

### Requirements

- **Location**: `src/components/[ComponentName].vue`
- **Pattern**: `<script setup lang="ts">` with typed `defineProps` / `defineEmits`
- **Styling**: UnoCSS utility classes (`presetWind4` / Tailwind 4 compatible)
- **States**: Cover loading, empty, error, and edge cases where applicable

### Spec

<!-- Describe what this component should do, what props it accepts, what events it emits -->

### Verification

- `bun run build` passes
- LSP diagnostics clean
