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
            <Button :title="buttonName" />
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
