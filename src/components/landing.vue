<template>
    <div class="flex flex-col lg:flex-row h-fit">
        <div class="w-full lg:w-1/2 h-full px-8 sm:px-20 flex flex-col">
            <div class="flex md:opacity-0 lg:opacity-100 gap-1 items-center mt-8">
                <div class="h-7 w-7 lg:w-10 lg:h-10 flex-shrink-0">
                    <img src="/public/favicon.png" />
                </div>
                <p class="text-md lg:text-xl font-semibold">Octodos</p>
            </div>
            <div class="flex flex-col my-16 lg:my-28 gap-7">
                <h1 class="text-5xl lg:text-6xl font-bold lg:font-extrabold" data-aos="fade-in" data-aos-easing="ease-in-sine">
                    <span
                        class="bg-gradient-to-tl from-emerald-700 via-green-500 to-cyan-500 text-transparent bg-clip-text font-medium" data-aos="zoom-in" data-aos-delay="200">#</span>1
                    Place to Build your Dreams with a touch Artistry.
                </h1>
                <p class="text-xl xl:w-4/5 lg:w-full sm:w-4/5" data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
                    A Nigerian agency offering complete digital solutions for all your web and
                    mobile development needs.
                </p>
                <div class="flex">
                    <Button :title="buttonName" />
                    <lottie-player src="https://lottie.host/ab8cb4f1-aa52-4a0b-aeb7-8d8fc43dda2d/DsU6l0o1dg.json"
                        background="##ffffff" speed="1" style="width: 70px; height: 70px; margin-top: -40px; color:#18A999"
                        loop autoplay direction="1" mode="normal" class="lg:block hidden"></lottie-player>
                </div>
            </div>
        </div>
        <div class="w-full mt-10 lg:mt-0 lg:w-1/2 h-[400px] lg:h-auto bg-[#18A999] relative">
        <img src="../assets/banner.jpeg" class="w-full h-full object-cover lg:object-top object-center absolute scale-x-[-1]"/>
        <div class="absolute w-full h-full flex justify-center items">
            <div class="h-fit w-fit lg:-mr-24 lg:mt-14">
                <lottie-player src="https://lottie.host/187e24e3-d7be-443c-9789-9f42ed5d9f87/2YDwabn6gB.json" background="##FFFFFF" speed="1" style="width: 270px; height: 300px" loop autoplay direction="1" mode="normal" class="crown lg:block hidden"></lottie-player>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Button from "./custom/Button.vue";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    name: "Landing",
    components: {
        Button,
    },
    setup() {
        const buttonName = ref("Schedule a Free Consultation");
        return {
            buttonName,
        };
    },
    mounted() {
        AOS.init({
            duration: 1000,
            once: true,
        });
    },
    updated() {
        AOS.refresh();
    }
};
</script>
