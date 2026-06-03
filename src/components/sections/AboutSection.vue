<template>
  <section id="about" class="section-container py-20 md:py-17">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" />
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div>
          <p class="text-lg text-cyber-textSecondary mb-6 leading-relaxed">
            I'm a passionate Informatics student with a strong focus on network engineering and cybersecurity.
            With hands-on experience in infrastructure design and security protocols, I'm committed to building
            robust and secure systems that protect organizations from evolving threats.
          </p>

          <p class="text-lg text-cyber-textSecondary mb-8 leading-relaxed">
            My journey in tech started with a curiosity about how systems work. Today, I combine theoretical
            knowledge with practical skills to deliver solutions that matter.
          </p>

          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 rounded-full bg-cyber-primary" />
              <span class="text-cyber-text">University: Institut Teknologi Kalimantan</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 rounded-full bg-cyber-primary" />
              <span class="text-cyber-text">Degree: Bachelor of Informatics</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 rounded-full bg-cyber-primary" />
              <span class="text-cyber-text">Focus: Network Engineering & Cybersecurity</span>
            </div>
          </div>
        </div>

        <!-- Right Content - Info Cards -->
        <div class="grid grid-cols-2 gap-4">
          <GlassCard>
            <div class="text-center">
              <div class="text-4xl font-bold gradient-text mb-2">
                <span ref="counter1">0</span><span>+</span>
              </div>
              <p class="text-cyber-textSecondary text-sm">Projects Completed</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div class="text-center">
              <div class="text-4xl font-bold gradient-text mb-2">
                <span ref="counter2">0</span><span>+</span>
              </div>
              <p class="text-cyber-textSecondary text-sm">Technical Roles</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div class="text-center">
              <div class="text-4xl font-bold gradient-text mb-2">
                <span ref="counter3">0</span><span>+</span>
              </div>
              <p class="text-cyber-textSecondary text-sm">Internship Experience</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div class="text-center">
              <div class="text-4xl font-bold gradient-text mb-2">
                <span ref="counter4">0</span><span>+</span>
              </div>
              <p class="text-cyber-textSecondary text-sm">Students Mentored</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import GlassCard from '@/components/common/GlassCard.vue';

const counter1 = ref(null);
const counter2 = ref(null);
const counter3 = ref(null);
const counter4 = ref(null);

const animateCounter = (element, target, duration = 2000) => {
  if (!element) return;
  
  const start = 0;
  const startTime = Date.now();
  
  const updateCounter = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * (target - start) + start);
    
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  
  updateCounter();
};

const animateAllCounters = () => {
  // Stagger the animations slightly for better visual effect
  setTimeout(() => animateCounter(counter1.value, 5, 2000), 0);
  setTimeout(() => animateCounter(counter2.value, 3, 2000), 100);
  setTimeout(() => animateCounter(counter3.value, 2, 2000), 200);
  setTimeout(() => animateCounter(counter4.value, 100, 2000), 300);
};

onMounted(() => {
  // Use Intersection Observer to trigger animation when section becomes visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateAllCounters();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const section = document.getElementById('about');
  if (section) {
    observer.observe(section);
  }
});
</script>
