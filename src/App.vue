<script>
import Navbar from "./layout/navbar.vue";
import { register } from 'swiper/element/bundle';
import { onMounted, onUnmounted, ref } from "vue";
import Monitor from "./components/custom/monitor.vue";

export default {
  name: "App",
  components: {
    Monitor,
    Navbar
  }
};
register();



</script>
<template>
  <div class="flex flex-col relative w-screen items-center">
    <div class="w-full relative flex flex-col app">
      <RouterView>
      </RouterView>
      <Monitor/>
    </div>
    <Navbar />
  </div>
  <main>

  </main>
</template>
