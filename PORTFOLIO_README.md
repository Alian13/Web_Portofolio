# Anugrah Alian - Professional Portfolio Website

A world-class, fully responsive portfolio website built with Vue 3, Vite, Tailwind CSS, and GSAP animations. Designed specifically for Network Engineers and Cybersecurity Professionals.

## 🎨 Features

✨ **Premium Dark Elegant Cyber Theme**
- Beautiful glassmorphism design
- Smooth scroll animations
- Responsive mobile-first layout
- Interactive network topology background

🚀 **Performance Optimized**
- Vite for fast development
- Tree-shaking and code splitting
- Lazy loading for images and components
- Optimized bundle size

🎯 **Comprehensive Sections**
- Hero Section with typewriter effect
- About Me with statistics
- Skills with progress indicators
- Certifications showcase
- Featured Projects gallery
- Experience timeline
- Cybersecurity Lab tools
- Tech stack showcase
- Contact form with validation
- Professional footer

🔧 **Technical Excellence**
- Vue 3 Composition API
- Pinia state management
- Vue Router for navigation
- GSAP for advanced animations
- Tailwind CSS for styling
- SEO optimized
- Accessibility friendly
- Fully accessible

## 📋 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── Button.vue
│   │   ├── GlassCard.vue
│   │   └── NetworkBackground.vue
│   └── sections/
│       ├── HeroSection.vue
│       ├── AboutSection.vue
│       ├── SkillsSection.vue
│       ├── CertificationsSection.vue
│       ├── ProjectsSection.vue
│       ├── ExperienceSection.vue
│       ├── CyberLabSection.vue
│       ├── TechStackSection.vue
│       └── ContactSection.vue
├── utils/
│   ├── animations.js
│   └── portfolio-data.js
├── stores/
│   └── portfolio.js
├── router/
│   └── index.js
├── App.vue
├── main.js
└── style.css
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20.19.0+ or 22.12.0+
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd "Web Portofolio/Portofolio-Web"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm run preview         # Preview production build locally

# Testing
npm run test:unit       # Run unit tests
npm run test:e2e        # Run end-to-end tests
npm run test:e2e:dev    # Run e2e tests in dev mode

# Code Quality
npm run lint            # Run linters
npm run format          # Format code with Prettier
```

## 🎨 Customization Guide

### Update Personal Information

Edit `src/utils/portfolio-data.js`:

```javascript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    title: ['Your Title 1', 'Your Title 2'],
    email: 'your-email@example.com',
    // ... more fields
  },
  // ... other sections
}
```

### Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  cyber: {
    bg: '#0A0A0A',          // Background
    card: 'rgba(255,255,255,0.05)',
    primary: '#00D4FF',     // Primary accent
    secondary: '#7C3AED',   // Secondary accent
    text: '#FFFFFF',        // Text color
    textSecondary: '#A1A1AA',
  }
}
```

### Add New Projects

In `src/utils/portfolio-data.js`, add to the `projects` array:

```javascript
{
  id: 5,
  title: 'Your Project Title',
  description: 'Project description',
  image: 'https://image-url.com',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com',
  demo: 'https://demo.com',
}
```

### Add New Skills

Update the `skills` object in `portfolio-data.js`:

```javascript
skills: {
  networking: ['New Skill 1', 'New Skill 2'],
  security: ['...'],
  // ... other categories
}
```

## 🔧 Component Usage

### GlassCard
```vue
<GlassCard>
  <p>Your content here</p>
</GlassCard>
```

### Button
```vue
<Button variant="primary">Click Me</Button>
<!-- Variants: primary, secondary, outline -->
```

### Sections
All sections are fully customizable and can be reused or modified independently.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully to different screen sizes.

## 🎯 Performance Optimization

- **Lazy Loading**: Images and sections load on demand
- **Code Splitting**: Automatic with Vite
- **CSS Minification**: Tailwind purges unused styles
- **Image Optimization**: Use modern formats (WebP)
- **Gzip Compression**: Enable on server

### Lighthouse Targets
- Performance: > 95
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
})
```

Then deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push origin main
```

## 🔐 Security Best Practices

- Keep dependencies updated: `npm audit fix`
- Use environment variables for sensitive data
- Validate all form inputs
- Use HTTPS in production
- Implement CSP headers

## 📊 SEO Optimization

✅ Meta tags for all pages
✅ Open Graph tags
✅ Mobile-friendly
✅ Fast loading times
✅ Structured data (Schema.org)
✅ Sitemap generation

## ♿ Accessibility

✅ WCAG 2.1 AA compliant
✅ Semantic HTML
✅ ARIA labels
✅ Keyboard navigation
✅ Color contrast ratios
✅ Alt text for images

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Tailwind Styles Not Working
```bash
# Rebuild Tailwind
npm run build
```

### Build Fails
```bash
# Check Node version
node --version  # Should be 20.19.0+

# Clear build cache
rm -rf dist
npm run build
```

## 📚 Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Vue Router** - Official router for Vue
- **Pinia** - State management
- **Axios** - HTTP client (optional)

## 📄 License

This portfolio template is provided as-is for personal use.

## 🤝 Support

For issues or questions:
1. Check documentation
2. Review code comments
3. Consult the troubleshooting section

## 🎓 Learning Resources

- [Vue 3 Documentation](https://vuejs.org)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Documentation](https://greensock.com/gsap)
- [Vue Router](https://router.vuejs.org)

---

**Created with ❤️ for Network Engineers and Cybersecurity Professionals**

*Last Updated: June 2, 2026*
