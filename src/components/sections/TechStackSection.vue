<template>
  <section id="techstack" class="section-container py-20 md:py-32">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Tech Stack</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" />
      </div>

      <!-- Tech Categories -->
      <div class="grid md:grid-cols-4 gap-6 mb-12">
        <GlassCard v-for="category in categories" :key="category" class="group">
          <div class="text-center">
            <h3 class="text-lg font-bold text-cyber-primary mb-4">{{ category }}</h3>
            <div class="space-y-2">
              <div v-for="tech in getTechByCategory(category)" :key="tech.name" class="px-3 py-2 rounded-lg bg-cyber-bg text-cyber-text text-sm hover:text-cyber-primary transition-smooth">
                {{ tech.name }}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      <!-- All Tech Grid -->
      <div>
        <h3 class="text-2xl font-bold text-cyber-text mb-6">All Technologies</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <div v-for="tech in techStack" :key="tech.name" class="group">
            <GlassCard class="h-full flex items-center justify-center min-h-24 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]">
              <div class="text-center">
                <div class="text-3xl mb-2">{{ getTechIcon(tech.name) }}</div>
                <p class="text-sm font-semibold text-cyber-primary group-hover:text-cyber-secondary transition-smooth">{{ tech.name }}</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import GlassCard from '@/components/common/GlassCard.vue';
import { portfolioData } from '@/utils/portfolio-data';

const techStack = portfolioData.techStack;

const categories = ['Networking', 'Security', 'Programming', 'Cloud', 'DevOps', 'OS'];

const techIcons = {
  'Cisco': '🔌',
  'MikroTik': '🌐',
  'Wireshark': '📊',
  'Burp Suite': '🔍',
  'Nmap': '🔎',
  'Kali Linux': '🐧',
  'Python': '🐍',
  'Bash': '⌨️',
  'JavaScript': '⚡',
  'Docker': '🐳',
  'Kubernetes': '☸️',
  'AWS': '☁️',
};

const getTechByCategory = (category) => {
  return techStack.filter(tech => tech.category === category);
};

const getTechIcon = (name) => {
  return techIcons[name] || '⚙️';
};
</script>
