# Create a New Page

## Context

You are working on the Vue 3 template project. Read `AGENTS.md` first for conventions.

## Task

Create a new page: **[PAGE_NAME]** at route **[ROUTE_PATH]**

### Requirements

1. **Page component** at `src/views/[PageName].vue`
   - `<script setup lang="ts">`, Composition API only
   - UnoCSS layout (responsive, max-width container, padding)
   - Loading / empty / error states

2. **Route registration** in `src/router/index.ts`
   - Lazy-loaded with dynamic import

### Spec

<!-- Describe what this page should display, what data it needs, interactions -->

### Verification

- `bun run build` passes
- Route works at `[ROUTE_PATH]`
