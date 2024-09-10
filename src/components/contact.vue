<template>
    <div class="lg:bg-gradient-to-r from-white from-50% to-teal-700 to-50% relative">
        <div class="flex flex-col lg:flex-row justify-between items-center">
            <div
                class="w-full lg:w-1/2 h-fit flex flex-col gap-3 items-center lg:items-start text-center lg:text-start px-7 sm:px-20 lg:my-32 my-12">
                <h2 class="lg:text-5xl text-4xl font-bold xl:w-4/5" data-aos="fade-in" data-aos-easing="ease-in-sine">
                    Discuss your Big Idea With us.
                </h2>
                <p class="text-xl my-2 lg:max-w-[400px]" data-aos="fade-in" data-aos-easing="ease-in-sine"
                    data-aos-delay="100">
                    Looking for guidance on your next project or support in bringing it to
                    life? Schedule a free meeting with our expert team, and we'll gladly explore your needs in depth.
                </p>
                <div class="lg:mt-3 md:mt-0 flex my-2">
                    <Button :title="buttonName" /> <lottie-player
                        src="https://lottie.host/ab8cb4f1-aa52-4a0b-aeb7-8d8fc43dda2d/DsU6l0o1dg.json"
                        background="##ffffff" speed="1"
                        style="width: 70px; height: 70px; margin-top: -40px; color:#18A999" loop autoplay direction="1"
                        mode="normal" class="hidden lg:block"></lottie-player>

                </div>
            </div>
            <div class="px-7 sm:px-20 lg:my-32 my-12 lg:w-1/2 w-full flex justify-center items-center lg:absolute right-0">
                <Socials/>
            </div>
        </div>


    </div>
</template>

<script>
import Socials from './socials.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './custom/Button.vue';
import { ref } from 'vue';
export default {
    name: "ContactSection",
    components: {
        Socials,
        Button
    },
    setup() {
        const buttonName = ref('Schedule a Free Meeting');
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