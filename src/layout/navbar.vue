<template>
    <nav class="fixed hidden md:flex gap-8 py-5 px-9 mt-5 border border-black/35 rounded-full bg-white z-50">
        <div class="border w-10 text-sm"></div>
        <RouterLink v-for="link in navlinks" class="font-medium text-sm" :to="link.url">{{ link.name }}</RouterLink>
    </nav>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "Navbar",
    setup() {
        const navlinks = ref([
            { id: 0, name: "Why Ferrum?", url: "/" },
            { id: 1, name: "Our Servies", url: "/about" },
            { id: 2, name: "Work", url: "/about" },
            { id: 3, name: "Clients", url: "/about" },
            { id: 4, name: "Contact", url: "/about" },
            // { id: 2, name: "Contact Us", url: "/about" },
        ]);
        
        return {
            navlinks,
        };
    }
};
</script>