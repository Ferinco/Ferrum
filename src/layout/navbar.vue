<template>
  <nav class="fixed hidden md:flex items-center gap-8 py-3 px-4 mt-5 border border-black/35 rounded-full bg-white z-50"
    data-aos="fade-down" data-aos-delay="300">
    <a class="w-10 h-10 text-sm" href="/">
      <img src="/public/favicon.png" />
    </a>
    <router-link v-for="link in navlinks" class="font-medium text-sm" :to="link.url" :key="link.id">
      {{ link.name }}
    </router-link>
    <RouterLink class="font-semibold text-sm text-green-700 px-3 py-2 rounded-full bg-green-100" to="/">
      Hire us
    </RouterLink>
  </nav>
  <div class="mobile-navbar md:hidden fixed w-full flex flex-col h-screen" :class="navOpen ? `bg-white transition-all duration-100` : `transition-all duration-100 bg-transparent`">
    <div class="flex flex-row items-baseline justify-between h-fit p-3 bg-white">
      <div class="flex gap-1 items-center mt-8 ">
        <div class="h-8 w-8 lg:w-10 lg:h-10 flex-shrink-0">
          <img src="/public/favicon.png" />
        </div>
        <p class="text-2xl font-semibold">Octodos</p>
      </div>
      <div class="nav-button pointer top-8 right-8 z-40" v-on:click="handleNavbar">
        <div class="h-[3px] w-8 bg-black rounded-lg transition-all duration-75 my-1"
          :class="navOpen === true ? `rotate-[42deg] -mb-[3px]` : `rotate-0`" />
        <div class="h-[3px] w-8 bg-black rounded-lg transition-all duration-75"
          :class="navOpen === true ? `rotate-[318deg]` : `rotate-0`" />
      </div>
    </div>
    <div class="gap-5 px-3 py-20" :class="navOpen ? `nav-items flex-grow flex flex-col transition-all duration-150` : `hidden transition-all duration-150`">
      <router-link v-for="link in navlinks" class="font-medium text-xl" :to="link.url" :key="link.id" v-on:click="handleNavbar">
        {{ link.name }}
      </router-link>
    </div>

  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      { id: 3, name: 'Clients', url: '/clients' },
      { id: 4, name: 'Contact', url: '/contact' },
    ];

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
  data() {
    const navOpen = ref(false);
    return navOpen;
  },
  methods: {
    handleNavbar() {
      if (this.navOpen === true) {
        this.navOpen = false;
      }
      else {
        this.navOpen = true;
      }

    }
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  },
  updated() {
    AOS.refresh();
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>