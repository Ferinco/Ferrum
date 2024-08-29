    <script setup>
    const props = defineProps({
        title: String
    });
    </script>

<template>
    <button class="text-white font-semibold rounded-lg bg-gradient-to-r w-fit  from-emerald-700 to-cyan-500 px-5 py-3">{{ title || "no props yet" }}</button>
</template>