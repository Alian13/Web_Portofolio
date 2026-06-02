<template>
  <section id="cyberseclab" class="section-container py-20 md:py-32">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Cybersecurity Lab</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" />
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <GlassCard v-for="tool in labTools" :key="tool.name" class="group hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]">
          <div class="text-center">
            <div class="text-5xl mb-4">{{ tool.icon }}</div>
            <h3 class="text-xl font-bold text-cyber-secondary mb-2">{{ tool.name }}</h3>
            <p class="text-cyber-textSecondary mb-4 text-sm">{{ tool.description }}</p>
            <a :href="tool.link" target="_blank" rel="noopener" class="inline-block px-4 py-2 text-sm rounded-lg border border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary hover:text-cyber-bg transition-smooth">
              Learn More
            </a>
          </div>
        </GlassCard>
      </div>

      <!-- Lab Setup Info -->
      <GlassCard class="mt-12 p-8">
        <h3 class="text-2xl font-bold text-cyber-primary mb-6">Lab Environment Setup</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold text-cyber-secondary mb-4">Penetration Testing</h4>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="text-cyber-primary">✓</span>
                <span class="text-cyber-text">Vulnerability Scanning with Nmap</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-cyber-primary">✓</span>
                <span class="text-cyber-text">Web App Testing with Burp Suite</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-cyber-primary">✓</span>
                <span class="text-cyber-text">Exploitation with Metasploit</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-cyber-primary">✓</span>
                <span class="text-cyber-text">Post-Exploitation Techniques</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-cyber-secondary mb-4">Network Analysis</h4>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="text-cyber-primary">✓</span>
                <span class="text-cyber-text">Packet Capture with Wireshark</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-cyber-primary">✓</span>
                <span class="text-cyber-text">Network Configuration (Cisco, MikroTik)</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-cyber-primary">✓</span>
                <span class="text-cyber-text">Threat Detection & Response</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-cyber-primary">✓</span>
                <span class="text-cyber-text">Security Monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </GlassCard>
    </div>
  </section>
</template>

<script setup>
import GlassCard from '@/components/common/GlassCard.vue';

const labTools = [
  {
    name: 'Kali Linux',
    icon: '🐧',
    description: 'Penetration testing distribution with pre-installed tools',
    link: 'https://www.kali.org',
  },
  {
    name: 'Wireshark',
    icon: '📊',
    description: 'Network packet analyzer for traffic visualization',
    link: 'https://www.wireshark.org',
  },
  {
    name: 'Metasploit',
    icon: '⚔️',
    description: 'Penetration testing framework',
    link: 'https://www.metasploit.com',
  },
  {
    name: 'Burp Suite',
    icon: '🔍',
    description: 'Web application security testing tool',
    link: 'https://portswigger.net/burp',
  },
  {
    name: 'Nmap',
    icon: '🔎',
    description: 'Network mapper for discovery and scanning',
    link: 'https://nmap.org',
  },
  {
    name: 'MikroTik',
    icon: '🌐',
    description: 'Enterprise network configuration platform',
    link: 'https://mikrotik.com',
  },
];
</script>
