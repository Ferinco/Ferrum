

<template>
    <button class="text-white font-semibold rounded-lg bg-gradient-to-r w-fit  from-green-700 to-green-900 px-5 py-3">{{ title || "no props yet" }}</button>
</template>
<script setup>
const props = defineProps({
    title: String
});
</script>