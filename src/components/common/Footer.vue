<template>
  <footer class="bg-black border-t border-white border-opacity-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-lg font-bold gradient-text">Anugrah Alian Putratama</span>
          </div>
          <p class="text-cyber-textSecondary text-sm">Network Engineer & Cybersecurity Enthusiast</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-cyber-text font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li><a href="#about" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">About</a></li>
            <li><a href="#skills" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">Skills</a></li>
            <li><a href="#projects" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">Projects</a></li>
            <li><a href="#contact" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">Contact</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-cyber-text font-semibold mb-4">Resources</h4>
          <ul class="space-y-2">
            <li><a href="#projects" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">All Projects</a></li>
            <li><a href="#experience" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">Experience</a></li>
            <li><a href="#certifications" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">Certifications</a></li>
            <li><a href="/resume.pdf" class="text-cyber-textSecondary hover:text-cyber-primary transition-smooth">Download CV</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="text-cyber-text font-semibold mb-4">Connect</h4>
          <div class="flex gap-4">
            <a href="https://github.com/Alian13" target="_blank" rel="noopener" class="w-10 h-10 rounded-lg glass flex items-center justify-center text-cyber-primary hover:text-cyber-secondary transition-smooth">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/anugrahalianputratama" target="_blank" rel="noopener" class="w-10 h-10 rounded-lg glass flex items-center justify-center text-cyber-primary hover:text-cyber-secondary transition-smooth">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.25-.129.599-.129.948v5.439h-3.553v-11h3.413v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 9.433c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.925 2.065-2.064 2.065zm1.782 10.519H3.555V8.452h3.564v11.5zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a href="https://instagram.com/anugrah_alian" target="_blank" rel="noopener" class="w-10 h-10 rounded-lg glass flex items-center justify-center text-cyber-primary hover:text-cyber-secondary transition-smooth">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.65-.934 1.347-1.776 1.494-.897.164-2.783.166-4.744.166h-.008c-1.925 0-2.847-.007-4.745-.207-1.629-.243-2.693-1.379-2.928-2.996-.056-.308-.087-.982-.07-2.498h.006c.003-.484.074-1.769.194-2.703.543-5.438 2.847-6.62 6.18-6.807.584-.04 1.17-.074 1.994-.074.89 0 1.464.028 1.996.15 1.822.313 2.851.957 3.637 2.355.822 1.592 1.949 5.344 2.175 6.986.027.2.038 1.02.008 1.694z" />
              </svg>
            </a>
            <a href="mailto:alianputratama@gmail.com" class="w-10 h-10 rounded-lg glass flex items-center justify-center text-cyber-primary hover:text-cyber-secondary transition-smooth">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-white border-opacity-10 my-8" />

      <!-- Bottom Footer -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-cyber-textSecondary text-sm mb-4 md:mb-0">
          &copy;Copyright 2026 Anugrah Alian Putratama. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
