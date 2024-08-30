<template>
    <div class="w-full md:w-1/2 h-full py-28 px-12 sm:px-20 flex flex-col gap-7">
        <div class="border h-14 w-[100px] flex-shrink-0"></div>
        <h1 class="text-6xl font-extrabold">
            <span
                class="bg-gradient-to-tl from-emerald-700 via-green-500 to-cyan-500 text-transparent bg-clip-text font-medium">#</span>1
            Place to Build your Dreams with a touch Artistry.
        </h1>
        <p class="text-xl xl:w-4/5">
            A Nigerian agency offering complete digital solutions for all your web
            and mobile development needs.
        </p>
        <Button :title="buttonName" />
    </div>
</template>

<script>
import { ref } from 'vue';
import Button from '../custom/Button.vue';

export default {
    name: 'Right',
    components: {
        Button,
    },
    setup() {
        const buttonName = ref('Schedule a Free Consultation');
        return {
            buttonName,
        };
    },
};
</script>