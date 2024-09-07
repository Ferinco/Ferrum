<template>
    <div class="flex flex-col md:flex-row h-fit">
        <div class="w-full md:w-1/2 h-full px-8 sm:px-20 flex flex-col my-28 gap-7">
            <div class="flex gap-1 items-center mt-8">
                <p class="text-xl font-semibold">Why Choose Us?</p>
            </div>
            <div class="flex flex-col gap-5">
                <h1 class="text-5xl font-bold lg:font-extrabold">
                    We know how to merge Innovation with Excellence.
                </h1>
                <p class="text-xl xl:w-4/5">
                    Choosing Octodos is the optimal choice to bring your ideas to life, utilizing the best resources and
                    a highly skilled team dedicated to your success.
                </p>
                <div class="flex flex-col gap-4">
                    <div class="flex gap-3" v-for="intro in intros">
                        <div class="h-9 w-8 border border-red-600">

                        </div>
                        <div class="flex flex-col leading-5">
                            <p class="font-semibold">{{ intro.title }}</p>
                            <p>{{ intro.about }}</p>
                        </div>
                    </div>
                </div>
                <Button :title="buttonName" class="mt-5" />
            </div>
        </div>
        <div class="w-full md:w-1/2 md:h-auto h-96 md:py-36 px-8 md:px-0 md:pr-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="h-[250px] w-full sm:w-[300px]" v-for="(card, index) in cards" :key="index"
                    :class="getClassName(index)">

                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Button from '@/components/custom/Button.vue';
import { ref } from 'vue';

export default {
    name: "About",
    components: {
        Button
    },
    setup() {
        const buttonName = ref("Choose Us Today!");
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
        const intros = [
            { icon: "", title: "Analysis", about: "make iuns shgdshd gsdshjb" },
            { icon: "", title: "Development", about: "make iuns shgdshd gsdshjb" },
            { icon: "", title: "Delivery", about: "make iuns shgdshd gsdshjb" }
        ];
        const cards = [
            { name: "Experience", about: "500" },
            { name: "Experience", about: "500" },
            { name: "Experience", about: "500" },
            { name: "Experience", about: "500" }
        ];
        return {
            serviceCards,
            intros,
            buttonName,
            cards
        };
    },
    methods: {
        getClassName(id) {
            return {
                'bg-blue-500 rotate-6': id === 0,
                'bg-green-500 -rotate-6 mt-10': id === 1,
                'bg-yellow-500 mt-10 sm:mt-0 rotate-6 sm:rotate-0': id === 2,
                'bg-red-500 -rotate-6 sm:rotate-6 mt-10': id === 3,
            };
        }
    }
}


</script>
