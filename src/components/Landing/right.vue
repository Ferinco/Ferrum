<template>
    <div class="w-full md:w-1/2 h-full px-8 sm:px-20 flex flex-col">
        <div class="flex gap-1 items-center mt-8">
            <div class="h-10 w-10 flex-shrink-0">
                <img src="/public/favicon.png" />
            </div>
            <p class="text-xl font-semibold">Octodos</p>
        </div>
        <div class="flex flex-col my-28 gap-7">
            <h1 class="text-5xl lg:text-6xl font-bold lg:font-extrabold">
                <span
                    class="bg-gradient-to-tl from-emerald-700 via-green-500 to-cyan-500 text-transparent bg-clip-text font-medium">#</span>1
                Place to Build your Dreams with a touch Artistry. 
            </h1>
            <p class="text-xl xl:w-4/5">
                A Nigerian agency offering complete digital solutions for all your web and
                mobile development needs.
            </p>
            <div class="flex">

                <Button :title="buttonName" />
                <lottie-player src="https://lottie.host/ab8cb4f1-aa52-4a0b-aeb7-8d8fc43dda2d/DsU6l0o1dg.json" background="##ffffff" speed="1" style="width: 70px; height: 70px; margin-top: -40px; color:#18A999" loop autoplay direction="1" mode="normal"></lottie-player>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Button from "../custom/Button.vue";

export default {
    name: "Right",
    components: {
        Button,
    },
    setup() {
        const buttonName = ref("Schedule a Free Consultation");
        return {
            buttonName,
        };
    },
};
</script>
