<template>
  <section id="contact" class="section-container py-20 md:py-32">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full mx-auto" />
        <p class="text-cyber-textSecondary text-lg mt-6">
          Have a project in mind? Let's collaborate and create something amazing together.
        </p>
      </div>

      <!-- Contact Form -->
      <GlassCard class="p-8 md:p-12">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Name -->
            <div>
              <label class="block text-cyber-text font-semibold mb-2">Name</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                class="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-white border-opacity-10 text-cyber-text placeholder-cyber-textSecondary focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary focus:ring-opacity-20 transition-smooth"
                required
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-cyber-text font-semibold mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                class="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-white border-opacity-10 text-cyber-text placeholder-cyber-textSecondary focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary focus:ring-opacity-20 transition-smooth"
                required
              />
            </div>
          </div>

          <!-- Subject -->
          <div>
            <label class="block text-cyber-text font-semibold mb-2">Subject</label>
            <input
              v-model="form.subject"
              type="text"
              placeholder="Project Inquiry"
              class="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-white border-opacity-10 text-cyber-text placeholder-cyber-textSecondary focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary focus:ring-opacity-20 transition-smooth"
              required
            />
          </div>

          <!-- Message -->
          <div>
            <label class="block text-cyber-text font-semibold mb-2">Message</label>
            <textarea
              v-model="form.message"
              rows="6"
              placeholder="Tell me about your project..."
              class="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-white border-opacity-10 text-cyber-text placeholder-cyber-textSecondary focus:outline-none focus:border-cyber-primary focus:ring-2 focus:ring-cyber-primary focus:ring-opacity-20 transition-smooth resize-none"
              required
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyber-primary to-cyber-secondary text-cyber-bg hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <!-- Success Message -->
          <transition name="fade">
            <div v-if="submitSuccess" class="p-4 rounded-lg bg-green-500 bg-opacity-20 text-green-400 text-center">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          </transition>
        </form>
      </GlassCard>

      <!-- Contact Info -->
      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <GlassCard class="text-center">
          <div class="text-3xl mb-3">📧</div>
          <h3 class="text-lg font-semibold text-cyber-primary mb-2">Email</h3>
          <a href="mailto:anugrah@example.com" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">
            anugrah@example.com
          </a>
        </GlassCard>

        <GlassCard class="text-center">
          <div class="text-3xl mb-3">📱</div>
          <h3 class="text-lg font-semibold text-cyber-primary mb-2">Phone</h3>
          <a href="tel:+1555123456" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">
            +1 (555) 123-4567
          </a>
        </GlassCard>

        <GlassCard class="text-center">
          <div class="text-3xl mb-3">📍</div>
          <h3 class="text-lg font-semibold text-cyber-primary mb-2">Location</h3>
          <p class="text-cyber-textSecondary">
            Your City, Your Country
          </p>
        </GlassCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import GlassCard from '@/components/common/GlassCard.vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    submitSuccess.value = true;

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    // Hide success message after 3 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 3000);
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
