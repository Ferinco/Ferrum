<template>
    <nav class="fixed hidden md:flex items-center gap-8 py-3 px-9 mt-5 border border-black/35 rounded-full bg-white z-50">
        <div class="w-10 h-10 text-sm">
            <img src="/public/favicon.png"/>
        </div>
        <RouterLink v-for="link in navlinks" class="font-medium text-sm" :to="link.url">{{ link.name }}</RouterLink>
    </nav>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "Navbar",
    setup() {
        const navlinks = ref([
            { id: 0, name: "Why Octodos?", url: "/" },
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