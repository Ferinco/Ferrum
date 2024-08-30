<template>
    <div class="w-full md:w-1/2 h-full bg-transparent px-12 sm:px-20 my-32">
        <h2 class="text-5xl font-bold">
            With us, Development is Made Easy!
        </h2>
        <p class="text-xl my-2">We provide vast services of custom development.</p>
        <div class="grid grid-cols-2 gap-5 mt-10">
            <div v-for="serviceCard in serviceCards" :key="serviceCard.id" class="service-card">
                <div class="w-12 h-12 my-2 icon-div flex justify-center items-center" :class="getClassName(serviceCard.id)">
                    <iconify-icon :icon="serviceCard.icon" noobserver class="text-white text-[2em]"></iconify-icon>
                </div>
                <h6 class="font-bold text-lg my-2">
                    {{ serviceCard.title }}
                </h6>
                <p class="text-md">
                    {{ serviceCard.about }}
                </p>
            </div>

        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
export default {
    name: "ServiceLeft",
    components: {
        Icon
    },
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
        }
    }
};
</script>

<style>
.icon-div {
    box-shadow: rgba(0, 0, 0, 0.9) 5px 5px
}
.icon{
    color: black !important;
}
</style>