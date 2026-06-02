<template>
  <button
    :class="[
      'px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-bg focus:ring-cyber-primary',
      'active:scale-95 active:duration-100',
      'touch-manipulation select-none',
      variantClasses,
    ]"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, outline
  },
});

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-gradient-to-r from-cyber-primary to-cyber-secondary text-cyber-bg hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-gradient-to-r from-cyber-secondary to-cyber-primary text-cyber-text hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-cyber-bg disabled:opacity-50 disabled:cursor-not-allowed',
  };
  return variants[props.variant] || variants.primary;
});

const onMouseDown = (e) => {
  e.currentTarget.style.transform = 'scale(0.98)';
};

const onMouseUp = (e) => {
  e.currentTarget.style.transform = '';
};
</script>
