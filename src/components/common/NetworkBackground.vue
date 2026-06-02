<template>
  <canvas ref="canvas" class="fixed inset-0 -z-10" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref(null);
let animationId = null;
let nodes = [];
let mouse = { x: 0, y: 0 };

onMounted(() => {
  const ctx = canvas.value.getContext('2d');
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  // Create nodes
  const nodeCount = 50;
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    });
  }

  // Mouse tracking
  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  window.addEventListener('mousemove', handleMouseMove);

  // Animation loop
  const animate = () => {
    // Clear canvas
    ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

    // Update and draw nodes
    nodes.forEach((node, i) => {
      // Move node
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off walls
      if (node.x < 0 || node.x > canvas.value.width) node.vx *= -1;
      if (node.y < 0 || node.y > canvas.value.height) node.vy *= -1;

      // Mouse interaction
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        node.x -= (dx / dist) * 2;
        node.y -= (dy / dist) * 2;
      }

      // Draw node
      ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw connections
      nodes.slice(i + 1).forEach((otherNode) => {
        const dx = otherNode.x - node.x;
        const dy = otherNode.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - dist / 150)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.stroke();
        }
      });
    });

    animationId = requestAnimationFrame(animate);
  };

  animate();

  // Handle resize
  const handleResize = () => {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
  };

  window.addEventListener('resize', handleResize);

  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
  });
});
</script>

<style scoped>
canvas {
  pointer-events: none;
}
</style>
