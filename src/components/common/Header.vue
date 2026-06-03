<template>
  <nav class="fixed top-0 w-full glass backdrop-blur-xl z-50 border-b border-white border-opacity-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 group">
          <span class="text-xl font-bold gradient-text">Anugrah Alian Putratama</span>
        </RouterLink>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex gap-8 items-center">
          <li>
            <a href="#about" class="cyber-line text-cyber-textSecondary hover:text-cyber-primary transition-smooth">
              About
            </a>
          </li>
          <li>
            <a href="#experience" class="cyber-line text-cyber-textSecondary hover:text-cyber-primary transition-smooth">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" class="cyber-line text-cyber-textSecondary hover:text-cyber-primary transition-smooth">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" class="cyber-line text-cyber-textSecondary hover:text-cyber-primary transition-smooth">
              Contact
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-cyber-primary" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="mobileMenuOpen" class="md:hidden absolute top-16 left-0 right-0 glass border-b border-white border-opacity-10 py-4">
          <ul class="flex flex-col gap-4 px-4">
            <li>
              <a href="#about" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth" @click="mobileMenuOpen = false">
                About
              </a>
            </li>
            <li>
              <a href="#skills" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth" @click="mobileMenuOpen = false">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth" @click="mobileMenuOpen = false">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth" @click="mobileMenuOpen = false">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth" @click="mobileMenuOpen = false">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const mobileMenuOpen = ref(false);
</script>

<style scoped>
.glass {
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
