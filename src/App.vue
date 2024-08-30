<script setup>
import Navbar from "./layout/navbar.vue";
import { register } from 'swiper/element/bundle';
register();
</script>
<template>
  <div class="flex flex-col relative w-screen items-center">
    <div class="w-full">
      <RouterView>

      </RouterView>
    </div>
    <Navbar />
  </div>
  <main>

  </main>
</template>
