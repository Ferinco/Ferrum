<template>
    <div class="h-screen fixed w-fit flex justify-start">
        <div class="hidden md:flex justify-center items-center gap-2 flex-col w-12 h-full">
            <div v-for="(dot, index) in 4" :key="index" class="w-6 h-6 rounded-full border-2 border-black flex justify-center items-center">
                <div class="w-[83%] h-[83%] mt-[1px] rounded-full" :class="getClassName(index)">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: "Monitor",
    setup() {
        const scrolledHeight = ref(0);
        const active = ref(0);

        function updateScrolledHeight() {
            const SizeDiv = document.getElementById('scroll-size');
            if (SizeDiv) {
                scrolledHeight.value = window.scrollY || window.pageYOffset;
                SizeDiv.innerText = scrolledHeight.value;
                if (scrolledHeight.value === 450) {
                    active.value = 0;
                } else if (scrolledHeight.value <= 580) {
                    active.value = 1;
                } else if (scrolledHeight.value <= 4400) {
                    active.value = 2;
                } else if (scrolledHeight.value <= 5280) {
                    active.value = 3;
                }
                console.log(active.value);
            }

        }

        onMounted(() => {
            window.addEventListener('scroll', updateScrolledHeight);
            updateScrolledHeight();
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', updateScrolledHeight);
        });

        function getClassName(index) {
            return {
                'bg-transparent': index !== active.value,
                'bg-black': index === active.value,
            };
        }
        console.log(active.value);
        return {
            scrolledHeight,
            active,
            getClassName,
        };
    },
};
</script>

