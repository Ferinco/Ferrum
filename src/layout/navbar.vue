<template>
    <nav class="fixed flex gap-8 py-4 px-9 mt-8 border border-teal-700 rounded-full bg-white">
        <div class="border w-10 text-sm">logo</div>
        <RouterLink v-for="link in navlinks" class="font-medium text-sm" :to="link.url">{{ link.name }}</RouterLink>
    </nav>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "Navbar",
    setup() {
        const navlinks = ref([
            { id: 0, name: "Home", url: "/" },
            { id: 1, name: "Why Ferrum", url: "/about" },
            { id: 2, name: "About us", url: "/about" },
            { id: 2, name: "Contact", url: "/about" },
            { id: 2, name: "Clients", url: "/about" },
            { id: 2, name: "Clients", url: "/about" },
        ]);
        return {
            navlinks,
        };
    }
};
</script>