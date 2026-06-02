<script setup>
import { onMounted } from 'vue';
import NetworkBackground from '@/components/common/NetworkBackground.vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

// Section Components
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import CertificationsSection from '@/components/sections/CertificationsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';

import '@/style.css';

onMounted(() => {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
});
</script>

<template>
  <div class="min-h-screen bg-cyber-bg text-cyber-text">
    <NetworkBackground />
    <Header />

    <!-- Main Content -->
    <main>
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

main {
  animation: fadeIn 0.6s ease-out;
}
</style>
