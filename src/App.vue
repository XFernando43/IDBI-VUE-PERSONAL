<script setup lang="ts">
import { useAuthStore } from './stores/authStore';


const authStore = useAuthStore();
</script>

<template>
  <h1>ACAs</h1>
  <div>{{ authStore.count }}</div>
  <button @click="authStore.increment">Incrementar</button>
</template>

<style scoped>
/* Estilos aquí */
</style>
