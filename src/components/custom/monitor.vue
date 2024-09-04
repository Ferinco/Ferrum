<template>
    <div class="h-screen fixed w-fit flex justify-start">
        <div class="hidden md:flex justify-center items-center gap-2 flex-col w-12 h-full">
            <div v-for="(dot, index) in 4" :key="index"
                class="w-6 h-6 rounded-full border-2 border-black flex justify-center items-center">
                <div class="w-[83%] h-[83%] mt-[1px] rounded-full" :class="getClassName(index)">
                </div>
            </div>
            {{ active }}
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: "Monitor",
    setup() {
        const active = ref(0);
        function updateScrolledHeight() {
            const scrollY = window.scrollY;
            // Set thresholds for active dot based on scroll position
            if (scrollY <= 450) {
                active.value = 0;
            } else if (scrollY <= 580) {
                active.value = 1;
            } else if (scrollY <= 4400) {
                active.value = 2;
            } else if (scrollY <= 5280) {
                active.value = 3;
            }
        }

        onMounted(() => {
            window.addEventListener('scroll', updateScrolledHeight);
            updateScrolledHeight(); // Initialize the active dot based on current scroll position
        });

        // onUnmounted(() => {
        //     window.removeEventListener('scroll', updateScrolledHeight);
        // });

        function getClassName(index) {
            return {
                'bg-transparent': index !== active.value,
                'bg-black': index === active.value,
            };
        }

        return {
            active,
            getClassName,
        };
    },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
