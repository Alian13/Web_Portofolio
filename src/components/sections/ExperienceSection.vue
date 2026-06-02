<template>
  <section id="experience" class="section-container py-12 md:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6\ lg:px-8 w-full">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience & Timeline</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" />
      </div>

      <!-- Timeline -->
      <div class="relative" ref="timelineContainerRef">
        <!-- Timeline Line with Moving Animation -->
        <div class="hidden md:block absolute left-1/2 top-0 w-1 -translate-x-1/2 overflow-hidden" :style="{ height: `${timelineHeight}px` }">
          <!-- Base Line -->
          <div class="absolute inset-0 w-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-cyber-primary" />
          
          <!-- Glow Layer 1 - Moving Down -->
          <div class="absolute left-1/2 -translate-x-1/2 w-2 h-20 bg-gradient-to-b from-transparent via-cyber-primary to-transparent opacity-50 blur-sm animate-glow-down" />
          
          <!-- Glow Layer 2 - Moving Up -->
          <div class="absolute left-1/2 -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-cyber-secondary via-transparent to-transparent opacity-40 blur-md animate-glow-up" />
        </div>

        <!-- Timeline Items -->
        <div class="space-y-12">
          <div 
            v-for="(item, index) in experience" 
            :key="item.id" 
            class="relative timeline-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Timeline Dot -->
            <div 
              class="hidden md:flex absolute left-1/2 top-0 w-8 h-8 rounded-full border-4 border-cyber-bg bg-cyber-primary -translate-x-1/2"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="absolute inset-0 rounded-full bg-cyber-primary opacity-0 animate-pulse-glow" />
            </div>

            <!-- Content -->
            <div :class="['md:w-5/12', index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto']">
              <GlassCard class="hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105">
                <div class="flex items-start justify-between mb-3">
                  <div>
                    <h3 class="text-xl font-bold text-cyber-primary">{{ item.title }}</h3>
                    <p class="text-cyber-secondary font-semibold">{{ item.company }}</p>
                  </div>
                  <span class="text-sm text-cyber-textSecondary bg-cyber-primary bg-opacity-10 px-3 py-1 rounded-full whitespace-nowrap ml-2">{{ item.date }}</span>
                </div>
                <p class="text-cyber-textSecondary mb-4">{{ item.description }}</p>
                <ul class="space-y-2">
                  <li v-for="(highlight, idx) in item.highlights" :key="idx" class="flex items-center gap-2 text-cyber-text">
                    <span class="w-2 h-2 rounded-full bg-cyber-primary animate-pulse" />
                    {{ highlight }}
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import GlassCard from '@/components/common/GlassCard.vue';
import { portfolioData } from '@/utils/portfolio-data';

const timelineContainerRef = ref(null);
const timelineHeight = ref(0);

// Sort experience by year (newest first - for reverse timeline layout)
const experience = computed(() => {
  return [...portfolioData.experience].sort((a, b) => {
    const yearA = parseInt(a.date.split('-')[0]);
    const yearB = parseInt(b.date.split('-')[0]);
    return yearB - yearA; // Descending order (newest first at top, oldest at bottom)
  });
});

onMounted(() => {
  // Calculate timeline height
  const calculateTimelineHeight = () => {
    if (timelineContainerRef.value) {
      const itemsContainer = timelineContainerRef.value.querySelector('.space-y-12');
      if (itemsContainer) {
        timelineHeight.value = itemsContainer.offsetHeight;
      }
    }
  };

  // Initial calculation
  calculateTimelineHeight();

  // Recalculate on window resize
  window.addEventListener('resize', calculateTimelineHeight);

  // Animate timeline items on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation class to timeline items
        const items = document.querySelectorAll('.timeline-item');
        items.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.animation = 'slideInTimeline 0.6s ease-out forwards';
          }, index * 100);
        });

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Get the section element and observe it
  const section = document.getElementById('experience');
  if (section) {
    observer.observe(section);
  }

  return () => {
    window.removeEventListener('resize', calculateTimelineHeight);
  };
});
</script>

<style scoped>
@keyframes slideInTimeline {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes glow-down {
  0% {
    top: -80px;
    opacity: 0;
  }
  10% {
    opacity: 0.5;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

@keyframes glow-up {
  0% {
    bottom: -64px;
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    bottom: 100%;
    opacity: 0;
  }
}

.animate-glow-down {
  animation: glow-down 8s ease-in-out infinite;
}

.animate-glow-up {
  animation: glow-up 9s ease-in-out infinite;
  animation-delay: 1.5s;
}

.timeline-item {
  opacity: 0;
}

/* Pulse glow animation */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 200, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 200, 255, 0);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s infinite;
}
</style>
