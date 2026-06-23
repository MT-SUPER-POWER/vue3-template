<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800">
    <nav class="flex items-center justify-center gap-6 px-4 py-4">
      <RouterLink
        to="/"
        class="text-white/70 transition-colors hover:text-white"
        active-class="text-white font-semibold"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="text-white/70 transition-colors hover:text-white"
        active-class="text-white font-semibold"
      >
        About
      </RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
