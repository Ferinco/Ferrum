<template>
    <div class="w-full h-fit flex md:flex-row flex-col" id="services">
        <ServiceLeft />
        <ServiceRight />
    </div>

</template>

<script>
import ServiceLeft from './serviceLeft.vue';
import ServiceRight from './serviceRight.vue';

export default {
    name: "Services",
    components: {
        ServiceLeft,
        ServiceRight
    }
};
</script>