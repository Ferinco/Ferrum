<template>
    <div class="lg:bg-gradient-to-r from-white from-50% to-[#18A999] to-50% contact">
        <div class="flex flex-col my-32 lg:px-10 px-7 gap-10 w-full">
            <div class="flex flex-col lg:flex-row justify-between items-center">
                <div class="flex flex-col gap-10 grow-0 lg:w-1/3 w-full text-center">
                    <h2 class="text-4xl font-medium my-5" data-aos="fade-in" data-aos-easing="ease-in-sine">Contact Octodos</h2>

                    <div class="flex flex-col justify-between items-center text-center h-full gap-3" data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
                        <p class="text-3xl">
                            Can't wait to bring your ideas to life?
                        </p>
                        <Button :title="buttonName" />
                    </div>
                    <div class="flex flex-col justify-between h-full items-center text-center gap-3" data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-delay="150">
                        <p class="text-3xl">
                            Need to meet us for some consultation to further discuss business?
                        </p>
                        <Button :title="buttonName" class="first" />
                    </div>
                </div>
                <div class="pl-0 mt-12 lg:mt-0 lg:pl-10 lg:w-1/2 w-full flex justify-center items-center">
                    <Socials/>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Button from '@/components/custom/Button.vue';
import { ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Socials from '@/components/socials.vue';
const buttonName = ref("hello@octodos.com");
export default {
    name: "ContactPage",
    setup() {
        const buttonName = ref("hello@octodos.com");
        return {
            buttonName,
        };
    },
    components: {
        Button,
        Socials
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
