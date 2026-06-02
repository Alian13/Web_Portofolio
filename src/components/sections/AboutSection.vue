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
              <div class="text-4xl font-bold gradient-text mb-2">5+</div>
              <p class="text-cyber-textSecondary text-sm">Projects Completed</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div class="text-center">
              <div class="text-4xl font-bold gradient-text mb-2">1</div>
              <p class="text-cyber-textSecondary text-sm">Certifications</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div class="text-center">
              <div class="text-4xl font-bold gradient-text mb-2">2+</div>
              <p class="text-cyber-textSecondary text-sm">Years Experience</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div class="text-center">
              <div class="text-4xl font-bold gradient-text mb-2">100%</div>
              <p class="text-cyber-textSecondary text-sm">Dedication</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import GlassCard from '@/components/common/GlassCard.vue';
</script>
