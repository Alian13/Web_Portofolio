<template>
  <div class="rounded-xl p-6 backdrop-blur-lg border border-white border-opacity-10 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-smooth group" style="background: rgba(255,255,255,0.05)">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
