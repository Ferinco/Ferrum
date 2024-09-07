<template>
    <div class="w-full md:w-1/2 h-fit bg-transparent px-8 sm:px-20 flex flex-col gap-3 py-5 my-12 md:my-32">
        <h2 class="text-5xl font-bold xl:w-4/5" data-aos="fade-in" data-aos-easing="ease-in-sine">
            Discuss your Big Idea With us.
        </h2>
        <p class="text-xl my-2 max-w-[400px]" data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-delay="100">
            Looking for guidance on your next project or support in bringing it to
            life? Schedule a free meeting with our expert team, and we'll gladly explore your needs in depth.</p>
        <div class="mt-10 md:mt-0 flex">
            <Button :title="buttonName" /> <lottie-player
                src="https://lottie.host/ab8cb4f1-aa52-4a0b-aeb7-8d8fc43dda2d/DsU6l0o1dg.json" background="##ffffff"
                speed="1" style="width: 70px; height: 70px; margin-top: -40px; color:#18A999" loop autoplay
                direction="1" mode="normal"></lottie-player>

        </div>
    </div>

</template>


<script>
import { ref } from 'vue';
import Button from '../custom/Button.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    name: "ContactLeft",
    components: {
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