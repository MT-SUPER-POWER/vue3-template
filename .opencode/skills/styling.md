# UnoCSS Styling Skill

Use this skill when **adding styles** to any component or page.

## Rules

### 1. Prefer Utility Classes
```vue
<!-- ✅ Good -->
<div class="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">

<!-- ❌ Bad: scoped style for basic layout -->
<div class="card">
<style scoped>
.card { display: flex; align-items: center; gap: 1rem; }
</style>
```

### 2. Use Attributify for Readability
```vue
<!-- ✅ Good - attributify for layout-heavy elements -->
<div flex="~ col" text="center" p="4" bg="white" rounded="lg">
```

### 3. Extract Patterns to Shortcuts
If a utility combination repeats 3+ times, add a shortcut in `uno.config.ts`:
```ts
shortcuts: [
  ['card', 'rounded-lg bg-white p-6 shadow-sm border border-gray-100'],
]
```

### 4. Component Scoped Styles — Only When Necessary
- Complex keyframe animations
- Overriding third-party component styles
- Pseudo-elements (`::before`, `::after`)

### 5. Use the Design Tokens from Theme
```ts
// uno.config.ts theme section
colors: {
  brand: {
    primary: '#4f46e5',
    secondary: '#7c3aed',
  },
}
```
Reference in templates: `class="bg-brand-primary text-white"`

## Do NOT
- Write raw CSS for layout that utilities can handle
- Use magic color values — prefer theme colors or UnoCSS color palette
- Import external CSS files unless absolutely necessary
