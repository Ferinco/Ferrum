<template>
    <nav class="fixed hidden md:flex items-center gap-8 py-3 px-4 mt-5 border border-black/35 rounded-full bg-white z-50">
      <div class="w-10 h-10 text-sm">
        <img src="/public/favicon.png" />
      </div>
      <router-link
        v-for="link in navlinks"
        class="font-medium text-sm"
        :to="link.url"
        :key="link.id"
      >
        {{ link.name }}
      </router-link>
      <RouterLink
        class="font-semibold text-sm text-green-700 px-3 py-2 rounded-full bg-green-100"
        to="/"
      >
        Hire us
      </RouterLink>
    </nav>

  </template>
  
  <script>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  
  export default {
    name: 'Navbar',
    setup() {
      const navOpen = ref(false);
      const navlinks = [
        { id: 0, name: 'Why Octodos?', url: '/about' },
        { id: 1, name: 'Our Services', url: '/services' },
        { id: 2, name: 'Work', url: '/about' },
        { id: 3, name: 'Clients', url: '/about' },
        { id: 4, name: 'Contact', url: '/about' },
      ]
  
      function handleNavbar() {
        navOpen.value = !navOpen.value;
        console.log(navOpen.value); // Check if navOpen toggles correctly
      }
      
  
      return {
        navlinks,
        navOpen,
        handleNavbar,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
  