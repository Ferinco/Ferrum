<template>
    <div class="w-full lg:w-1/2 h-full bg-transparent px-7 sm:px-20 my-32">
        <h2 class="text-5xl font-bold" data-aos="fade-in" data-aos-easing="ease-in-sine">
            With us, Everything is Made Easy!
        </h2>
        <p class="text-2xl my-4">We provide vast services of custom development.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div v-for="serviceCard in serviceCards" :key="serviceCard.id" class="service-card my-2" data-aos="fade-in" data-aos-easing="ease-in-sine" :data-aos-delay="getDelay(serviceCard.id)">
                <div class="w-12 h-12 my-4 icon-div flex justify-center items-center border border-black"
                    :class="getClassName(serviceCard.id)">
                    <iconify-icon :icon="serviceCard.icon" noobserver class="text-white text-[2em]"></iconify-icon>
                </div>
                <h6 class="font-semibold text-2xl mt-2 leading-6">
                    {{ serviceCard.title }}
                </h6>
                <p class="text-lg">
                    {{ serviceCard.about }}
                </p>
            </div>

        </div>
    </div>
</template>
<script>
import  AOS  from 'aos';
import 'aos/dist/aos.css';

import { ref } from 'vue';
export default {
    name: "ServiceLeft",
    setup() {
        const serviceCards = ref([
            {
                id: 0,
                icon: "fluent:laptop-20-filled",
                title: "Web Development",
                about: "Crafting responsive and dynamic websites tailored to your business needs."
            },
            {
                id: 1,
                icon: "fluent:phone-20-filled",
                title: "Mobile Apps Development",
                about: "Building intuitive mobile applications for both Android and iOS platforms."
            },
            {
                id: 2,
                icon: "clarity:email-solid",
                title: "Email Services",
                about: "Providing reliable and secure email solutions to enhance communication."
            },
            {
                id: 3,
                icon: "mdi:bricks",
                title: "Project Management",
                about: "Efficiently managing your projects from conception to completion."
            }
        ]

        );
        return {
            serviceCards,
        };
    },
    methods: {
        getClassName(id) {
            return {
                'bg-blue-500 rotate-6': id === 0,
                'bg-green-500 -rotate-6': id === 1,
                'bg-yellow-500 -rotate-6': id === 2,
                'bg-red-500 rotate-6': id === 3,
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

<style>
.icon-div {
    box-shadow: rgba(0, 0, 0, 0.9) 5px 5px
}

.icon {
    color: black !important;
}
</style>