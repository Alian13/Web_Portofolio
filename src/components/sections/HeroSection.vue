<template>
  <section id="hero" class="section-container pt-16 pb-12 md:pt-20 lg:pt-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="order-2 md:order-1">
          <div class="mb-6 overflow-hidden">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight transition-all duration-700 hover:scale-105 origin-left">
              Hey, I'm <span class="gradient-text">Anugrah Alian</span>
            </h1>
          </div>

          <div class="h-20 mb-6">
            <div
              ref="typewriterRef"
              class="text-lg sm:text-xl md:text-2xl text-cyber-textSecondary font-semibold min-h-[2.5rem] transition-all duration-500"
            >
              Informatics Student
            </div>
          </div>

          <p class="text-cyber-textSecondary text-base sm:text-lg md:text-lg mb-8 leading-relaxed transition-all duration-500 hover:text-cyber-primary">
            Passionate about Network Engineering and Cybersecurity. Building secure, scalable infrastructure
            and helping organizations protect their digital assets.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" @click="scrollTo('projects')">
              View Projects
            </Button>
            <Button variant="outline" @click="scrollTo('contact')">
              Contact Me
            </Button>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4 sm:gap-6 mt-6 flex-wrap">
            <a href="https://github.com/Alian13" target="_blank" rel="noopener" class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass flex items-center justify-center text-cyber-primary hover:text-cyber-secondary hover:scale-125 transition-all duration-300 active:scale-95 touch-manipulation">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/anugrahalianputratama" target="_blank" rel="noopener" class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass flex items-center justify-center text-cyber-primary hover:text-cyber-secondary hover:scale-125 transition-all duration-300 active:scale-95 touch-manipulation">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.25-.129.599-.129.948v5.439h-3.553v-11h3.413v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 9.433c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.925 2.065-2.064 2.065zm1.782 10.519H3.555V8.452h3.564v11.5zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Content - Profile Image with Gradient Box -->
        <div class="order-1 md:order-2 relative flex justify-center items-center group -mt-1 md:-mt-12">
          <!-- Gradient Box Background with Glow -->
          <div class="absolute bottom-0 w-64 sm:w-72 md:w-[380px] lg:w-[370px] h-72 sm:h-80 md:h-96 rounded-3xl overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-br from-cyber-primary to-cyber-secondary opacity-30 animate-pulse-glow shadow-0 shadow-cyber-primary" />
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyber-primary via-cyber-secondary to-cyber-primary opacity-30 group-hover:opacity-0 transition-opacity duration-500" />
          </div>
          
          <!-- Profile Image (larger and centered) -->
          <div class="relative z-10 flex justify-center transition-transform duration-500 group-hover:scale-105">
            <img 
              src="/profile.png" 
              alt="Anugrah Alian" 
              class="w-56 sm:w-64 md:w-[340px] lg:w-[385px] h-auto object-contain drop-shadow-2xl duration-500 group-hover:drop-shadow-[0_0_15px_rgba(0,200,255,0.8)]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from '@/components/common/Button.vue';

const typewriterRef = ref(null);
const titles = [
  'Informatics Student',
  'Network Engineer Enthusiast',
  'Cyber Security Learner',
  'Infrastructure Architect',
];

let titleIndex = 0;

const typeTitle = () => {
  const currentTitle = titles[titleIndex];
  let charIndex = 0;
  typewriterRef.value.textContent = '';

  const type = () => {
    if (charIndex < currentTitle.length) {
      typewriterRef.value.textContent += currentTitle.charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    } else {
      setTimeout(() => {
        deleteTitle();
      }, 3000);
    }
  };

  type();
};

const deleteTitle = () => {
  let charIndex = typewriterRef.value.textContent.length;

  const deleteChar = () => {
    if (charIndex > 0) {
      typewriterRef.value.textContent = typewriterRef.value.textContent.slice(0, -1);
      charIndex--;
      setTimeout(deleteChar, 30);
    } else {
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(typeTitle, 500);
    }
  };

  deleteChar();
};

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  typeTitle();
});
</script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
