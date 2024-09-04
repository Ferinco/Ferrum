<template>
  <main id="app">
    <!-- <Preloader v-if="status" /> -->
    <div  class="flex flex-col relative w-screen items-center">
      <div class="w-full relative flex flex-col app">
 
          <router-view></router-view>
 
        <Monitor />
      </div>
      <Navbar />
    </div>
  </main>
</template>

<script>
import Navbar from "./layout/navbar.vue";
import { register } from 'swiper/element/bundle';
import { onMounted, ref } from "vue";
import Monitor from "./components/custom/monitor.vue";
import { RouterView } from "vue-router";
import Preloader from "./pages/preloader.vue";

export default {
  name: "App",
  setup() {
    const status = ref(true);

    onMounted(() => {
      setTimeout(() => {
        status.value = false;
        console.log(status.value); // Will log `false` after 2 seconds
      }, 3000);
    });

    // Correctly return an object containing status
    return {
      status
    };
  },

  components: {
    Monitor,
    Navbar,
    Preloader
  },
};

register();
</script>


