<template>
    <div class="w-full md:w-1/2 relative h-auto bg-[#18A999] flex flex-col px-8 sm:px-20 items-center justify-center gap-5 py-5">
        <div class="my-32 flex flex-col gap-3" data-aos="fade-left">
            <div class="p-5 rounded-lg h-fit border w-fit flex items-center gap-5 cursor-pointer duration-100 hover:z-10 hover:rotate-0 z-30" v-for="social in socials" :class="getClassName(social.id)">
            <div class="h-9 w-9">
                <iconify-icon :icon="social.icon" noobserver class="text-white text-[2em]"></iconify-icon>

            </div>
            <div class="text-white text-2xl">
                <h3>{{ social.about }}</h3>
            </div>
            </div>
        </div>
    </div>

</template>


<script>
import { ref } from 'vue';
import  AOS  from 'aos';
import 'aos/dist/aos.css';

export default {
    name: "ContactRight",
    setup() {
        const socials = ref([
            {
                id: 0,
                icon: "mdi-light:email",
                about: "Reach out to us via Email"
            },
            {
                id: 1,
                icon: "hugeicons:whatsapp",
                about: "Message us on WhatsApp"
            },
            {
                id: 2,
                icon: "ph:linkedin-logo-thin",
                about: "Connect with us on LinkedIn"
            },
            {
                id: 3,
                icon: "pajamas:twitter",
                about: "Follow our X/Twitter page."
            }
        ]

        );
        return {
            socials,
        };
    },
    methods: {
        getClassName(id) {
            return {
                'bg-blue-500 rotate-6 hover:mb-5': id === 0,
                'bg-green-500 -rotate-6 hover:my-5': id === 1,
                'bg-yellow-500 -rotate-6 hover:my-5': id === 2,
                'bg-red-500 rotate-6  hover:mt-5': id === 3,
            };
        },
        getDelay(id) {
            return {
                '100': id === 0,
                '200': id === 1,
                '300': id === 2,
                '400': id === 3,
            };
        }
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