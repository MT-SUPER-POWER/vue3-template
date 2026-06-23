# Vue 3 + TypeScript + Vite + UnoCSS

[![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?logo=vue.js&logoColor=fff)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](https://vite.dev/)
[![UnoCSS](https://img.shields.io/badge/UnoCSS-333?logo=unocss&logoColor=fff)](https://unocss.dev/)
[![Bun](https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff)](https://bun.sh/)

Modern Vue 3 starter template with **Composition API**, **TypeScript strict mode**, **Vite 8**, **UnoCSS (Tailwind 4 compatible)**, and **AI Agent** integration.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | **Vue 3** — Composition API, `<script setup lang="ts">` |
| Language | **TypeScript** strict mode |
| Build | **Vite 8** |
| Styling | **UnoCSS** — `presetWind4` (Tailwind 4 compatible) + `presetAttributify` |
| Lint | **ESLint** + **Prettier** (format on save) |
| Package Manager | **Bun** |

## Getting Started

```bash
# Clone this template
git clone <repo-url> my-project
cd my-project

# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint
bun run lint

# Format
bun run format
```

## Project Structure

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

## Coding Conventions

### Vue SFCs

- Always use `<script setup lang="ts">` with Composition API
- Typed `defineProps` / `defineEmits` — no runtime declarations
- No Options API (`data()`, `methods: {}`, `this.*`)
- No `any` type suppression

### Styling

- Use UnoCSS utility classes directly in templates
- Use `presetAttributify` for cleaner layout attributes: `<div flex="~ col">`
- Repeated patterns → extract to `shortcuts` in `uno.config.ts`
- Component-scoped styles only for animations / overrides
- Custom theme colors available under `brand-*` (defined in `uno.config.ts`)

## AI Agent Integration

This template is AI Agent ready. Both coding agents and humans have the tools they need.

### Built-in Skills

Installed from [skills.sh](https://skills.sh/) — the open agent skills ecosystem:

| Skill | Source | Description |
|-------|--------|-------------|
| `vue` | [antfu/skills](https://skills.sh/antfu/skills) | Vue 3 conventions from Anthony Fu |
| `vue-best-practices` | [hyf0/vue-skills](https://skills.sh/hyf0/vue-skills/vue-best-practices) | Production Vue 3 patterns (23K+ installs) |
| `vue-debug-guides` | [hyf0/vue-skills](https://skills.sh/hyf0/vue-skills/vue-debug-guides) | Vue debugging guides |
| `typescript-advanced-types` | [wshobson/agents](https://skills.sh/wshobson/agents/typescript-advanced-types) | TypeScript advanced patterns (49K+ installs) |

For OpenCode / Claude Code / Cursor / Codex users, these skills are available at `.agents/skills/`. Other agents can install them via:

```bash
npx skills add <owner/repo>@<skill-name>
```

### AI Agent Guide

[`AGENTS.md`](./AGENTS.md) — comprehensive conventions document for any AI coding agent working on this project.

### Prompt Templates

[`prompts/`](./prompts/) — reusable prompt templates for common tasks:

| Template | Use Case |
|----------|----------|
| `new-component.md` | Create a new Vue 3 component |
| `new-page.md` | Create a new page with routing |
| `new-api-service.md` | Create API service functions |

### OpenCode Instructions

[`.opencode/instructions.md`](./.opencode/instructions.md) — project-specific instructions for OpenCode users.

### Project Skills

[`.opencode/skills/`](./.opencode/skills/) — project-level skills for Vue 3 component creation, page creation, API services, and styling.

## Recommended VS Code Extensions

- [Vue Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=github.copilot)
- [Continue](https://marketplace.visualstudio.com/items?itemName=Continue.continue)

## Scripts Reference

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server with HMR |
| `bun run build` | TypeScript check + Vite production build |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint across the project |
| `bun run format` | Format all files with Prettier |
