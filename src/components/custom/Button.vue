<template>
    <button
        class="btn btn-three text-white font-semibold rounded-md bg-green-600 w-fit px-5 py-3 lg:py-4 z-40 cursor-pointer hover:bg-green-700 after:rounded-md">
        <span>
            {{ title || "no propsyet" }}
        </span>
    </button>
</template>
<script setup>
const props = defineProps({
    title: String
});
</script>
<style>
.btn-three {
    color: #FFF;
    transition: all 0.5s;
    position: relative;
}

.btn-three::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
}

.btn-three:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
}

.btn-three::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    transform: scale(1.2, 1.2);
}

.btn-three:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}
</style>