<template>
  <section id="projects" class="section-container py-12 md:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" />
      </div>

      <!-- Projects Grid - Minimalist View -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard 
          v-for="project in projects" 
          :key="project.id"
          @click="openProjectDetail(project)"
          class="overflow-hidden group cursor-pointer hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-300 hover:scale-105 flex flex-col"
        >
          <!-- Project Image - Full Width -->
          <div class="relative h-56 overflow-hidden rounded-lg mb-4">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            
            <!-- Status Badge -->
            <div 
              v-if="project.status"
              :class="[
                'absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold transition-all',
                project.status === 'In Progress' 
                  ? 'bg-yellow-500/80 text-yellow-900 animate-pulse' 
                  : 'bg-green-500/80 text-green-900'
              ]"
            >
              {{ project.status }}
            </div>
          </div>

          <!-- Project Content - Minimal -->
          <div class="px-4 pb-4 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-cyber-primary mb-2 group-hover:text-cyber-secondary transition-colors">
              {{ project.title }}
            </h3>
            
            <!-- Description and Tech Preview - Flex Grow -->
            <div class="flex-1 flex flex-col">
              <p class="flex-1 text-cyber-textSecondary text-sm line-clamp-2">
                {{ project.description }}
              </p>
              
              <!-- Technologies Preview -->
              <div class="flex flex-wrap gap-1 mt-auto pt-3">
              <span 
                v-for="(tech, idx) in project.technologies.slice(0, 3)" 
                :key="tech"
                class="px-2 py-1 rounded text-xs bg-cyber-primary bg-opacity-20 text-cyber-primary"
              >
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 3" class="px-2 py-1 rounded text-xs text-cyber-textSecondary">
                +{{ project.technologies.length - 3 }}
              </span>
              </div>
            </div>

            <!-- Learn More Button -->
            <button 
              class="w-full px-3 py-2 mt-4 rounded-lg bg-gradient-to-r from-cyber-primary to-cyber-secondary text-cyber-bg font-medium hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all text-sm"
            >
              Learn More
            </button>
          </div>
        </GlassCard>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <div 
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click="closeProjectDetail"
    >
      <GlassCard 
        @click.stop
        class="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
      >
        <!-- Close Button -->
        <button 
          @click="closeProjectDetail"
          class="absolute top-4 right-4 w-10 h-10 rounded-full hover:bg-cyber-primary/20 transition-colors flex items-center justify-center z-10"
        >
          <svg class="w-6 h-6 text-cyber-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Project Header Image -->
        <div class="relative h-64 overflow-hidden rounded-lg mb-6">
          <img 
            :src="selectedProject.image" 
            :alt="selectedProject.title" 
            class="w-full h-full object-cover object-top" 
          />
          
          <!-- Status Badge in Modal -->
          <div 
            v-if="selectedProject.status"
            :class="[
              'absolute top-4 right-4 px-4 py-2 rounded-full font-bold transition-all',
              selectedProject.status === 'In Progress' 
                ? 'bg-yellow-500/90 text-yellow-900 text-sm animate-pulse' 
                : 'bg-green-500/90 text-green-900 text-sm'
            ]"
          >
            {{ selectedProject.status }}
          </div>
        </div>

        <div class="p-6">
          <!-- Title & Description -->
          <h2 class="text-3xl font-bold text-cyber-primary mb-2">{{ selectedProject.title }}</h2>
          <p class="text-cyber-textSecondary mb-6 leading-relaxed">
            {{ selectedProject.description }}
          </p>

          <!-- Requirements Section -->
          <div class="mb-6 pb-6 border-b border-cyber-primary/20">
            <h3 class="text-xl font-bold text-cyber-secondary mb-4 flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Requirements & Features
            </h3>
            <div class="grid gap-3">
              <div v-for="req in selectedProject.requirements" :key="req" class="flex gap-2 text-cyber-textSecondary">
                <span class="text-cyber-primary">▸</span>
                <span>{{ req }}</span>
              </div>
            </div>
          </div>

          <!-- Technologies -->
          <div class="mb-6">
            <h3 class="text-xl font-bold text-cyber-secondary mb-4">Technologies Used</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in selectedProject.technologies" 
                :key="tech"
                class="px-3 py-1 rounded-full text-sm bg-cyber-primary bg-opacity-20 text-cyber-primary hover:bg-opacity-40 transition-all"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Action Links -->
          <div 
            v-if="selectedProject.github || selectedProject.demo"
            :class="[
              'flex pt-6 border-t border-cyber-primary/20',
              selectedProject.github && selectedProject.demo ? 'gap-4' : 'gap-0'
            ]"
          >
            <a 
              v-if="selectedProject.github"
              :href="selectedProject.github" 
              target="_blank" 
              rel="noopener"
              :class="[
                'px-4 py-3 rounded-lg border border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10 transition-all font-medium text-center flex items-center justify-center gap-2',
                selectedProject.github && selectedProject.demo ? 'flex-1' : 'flex-1'
              ]"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a 
              v-if="selectedProject.demo"
              :href="selectedProject.demo" 
              target="_blank" 
              rel="noopener"
              :class="[
                'px-4 py-3 rounded-lg bg-gradient-to-r from-cyber-primary to-cyber-secondary text-cyber-bg hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all font-medium text-center flex items-center justify-center gap-2',
                selectedProject.github && selectedProject.demo ? 'flex-1' : 'flex-1'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Project
            </a>
          </div>
        </div>
      </GlassCard>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import GlassCard from '@/components/common/GlassCard.vue';
import { portfolioData } from '@/utils/portfolio-data';

const selectedProject = ref(null);

const projects = portfolioData.projects.map(project => ({
  ...project,
  requirements: project.requirements || [
    'Scalable architecture design',
    'Enterprise-level implementation',
    'Security-focused approach',
    'Real-time monitoring and analytics',
  ]
}));

const openProjectDetail = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = 'hidden';
};

const closeProjectDetail = () => {
  selectedProject.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
