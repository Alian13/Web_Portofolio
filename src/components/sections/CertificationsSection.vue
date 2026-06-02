<template>
  <section id="certifications" class="section-container py-20 md:py-32">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Certifications</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" />
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <GlassCard v-for="cert in certifications" :key="cert.id" class="hover:shadow-[0_0_40px_rgba(0,212,255,0.4)]">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-cyber-primary mb-1">{{ cert.title }}</h3>
              <p class="text-sm text-cyber-textSecondary mb-2">{{ cert.issuer }}</p>
              <p class="text-sm text-cyber-textSecondary font-medium">{{ cert.date }}</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import GlassCard from '@/components/common/GlassCard.vue';
import { portfolioData } from '@/utils/portfolio-data';

const certifications = portfolioData.certifications;
</script>
