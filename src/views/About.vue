<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>

<template>
  <section id="center">
    <h1>About</h1>
    <p>Vue 3 + TypeScript + Vite + UnoCSS template with Pinia and Vue Router.</p>
    <p>
      Counter: <strong>{{ counter.count }}</strong>
    </p>
    <button type="button" class="counter" @click="counter.increment()">Increment from store</button>
  </section>
</template>
