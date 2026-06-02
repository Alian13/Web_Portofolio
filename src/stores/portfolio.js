import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePortfolioStore = defineStore('portfolio', () => {
  const theme = ref('dark');
  const sidebarOpen = ref(false);
  const currentSection = ref('home');

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  const setSidebarOpen = (value) => {
    sidebarOpen.value = value;
  };

  const setCurrentSection = (section) => {
    currentSection.value = section;
  };

  return {
    theme,
    sidebarOpen,
    currentSection,
    toggleTheme,
    setSidebarOpen,
    setCurrentSection,
  };
});
