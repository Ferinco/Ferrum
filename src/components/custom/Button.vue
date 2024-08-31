

<template>
    <button class="text-white font-semibold rounded-md bg-green-600 w-fit px-5 py-3 lg:py-4 z-30">{{ title || "no props yet" }}</button>
</template>
<script setup>
const props = defineProps({
    title: String
});
</script>