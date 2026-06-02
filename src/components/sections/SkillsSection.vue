<template>
  <section id="skills" class="section-container py-20 md:py-32">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" />
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Network Engineering -->
        <GlassCard>
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-cyber-primary mb-4 flex items-center gap-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Network Engineering
            </h3>
            <div class="space-y-3">
              <div v-for="skill in skills.networking" :key="skill" class="flex items-center justify-between">
                <span class="text-cyber-text">{{ skill }}</span>
                <div class="w-24 h-2 bg-cyber-bg rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" :style="{ width: '90%' }" />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <!-- Cybersecurity -->
        <GlassCard>
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-cyber-secondary mb-4 flex items-center gap-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Cybersecurity
            </h3>
            <div class="space-y-3">
              <div v-for="skill in skills.security" :key="skill" class="flex items-center justify-between">
                <span class="text-cyber-text">{{ skill }}</span>
                <div class="w-24 h-2 bg-cyber-bg rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-cyber-secondary to-cyber-primary rounded-full" :style="{ width: '85%' }" />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <!-- Programming -->
        <GlassCard>
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-cyber-primary mb-4 flex items-center gap-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Programming
            </h3>
            <div class="space-y-3">
              <div v-for="skill in skills.programming" :key="skill" class="flex items-center justify-between">
                <span class="text-cyber-text">{{ skill }}</span>
                <div class="w-24 h-2 bg-cyber-bg rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" :style="{ width: '80%' }" />
                </div>
              </div>
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

const skills = portfolioData.skills;
</script>
