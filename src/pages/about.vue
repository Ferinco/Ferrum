<template>
    <div class="flex flex-col lg:flex-row h-fit">
        <div class="w-full lg:w-1/2 h-full px-8 sm:px-20 flex flex-col my-28 gap-7" data-aos="fade-right">
            <div class="flex gap-1 items-center mt-8">
                <p class="text-xl font-semibold">Why Choose Us?</p>
            </div>
            <div class="flex flex-col gap-5">
                <h1 class="xl:text-5xl text-4xl font-semibold lg:font-bold">
                    We know how to merge Innovation with Excellence.
                </h1>
                <p class="text-xl xl:w-4/5">
                    Choosing Octodos is the optimal choice to bring your ideas to life, utilizing the best resources and
                    a highly skilled team dedicated to your success.
                </p>
                <div class="flex flex-col gap-4">
                    <div class="flex gap-3" v-for="(intro, index) in intros" :key="index">
                        <div class="h-9 w-9 overflow-hidden">
                            <lottie-player :src="intro.icon" background="##ffffff" speed="1" style="" loop autoplay
                                direction="1" mode="normal" :class="getSize(index)"></lottie-player>
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
        <div class="w-full lg:w-1/2 md:h-auto lg:py-36 px-8 lg:px-0 lg:pr-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5" data-aos="fade-left">
                <div class="h-fit w-full sm:w-[300px] md:w-[400px] lg:w-[300px] p-5 flex flex-col text-white gap-3 rounded-2xl card"
                    v-for="(card, index) in cards" :key="index" :class="getClassName(index)">
                    <iconify-icon :icon="card.icon" noobserver class="text-white text-[2em]"></iconify-icon>

                    <div class="text-2xl font-medium">{{ card.name }}</div>
                    <div>{{ card.about }}</div>
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
            { icon: "https://lottie.host/bf636159-831e-4f76-87c3-ecce17032bce/RBUZdsQeYZ.json", title: "Analysis", about: "make iuns shgdshd gsdshjb" },
            { icon: "https://lottie.host/9b665d6c-a353-400d-9c44-5ee3b7f933f0/Sz4ThZc7YT.json", title: "Development", about: "make iuns shgdshd gsdshjb" },
            { icon: "https://lottie.host/264b0966-3794-41e1-9126-3c3ff85fe539/xVjwQapcy2.json", title: "Delivery", about: "make iuns shgdshd gsdshjb" }
        ];
        const cards = [

            {
                icon: "carbon:trophy",
                name: "Experience",
                about: "With years of industry experience, our team has successfully delivered innovative solutions for diverse clients, ensuring quality and reliability in every project."
            },
            {
                icon: "iconamoon:heart-light",
                name: "Team",
                about: "Our dedicated team of experts collaborates seamlessly to turn your vision into reality, bringing together diverse skills and knowledge to achieve exceptional results."
            },
            {
                icon: "system-uicons:lightbulb",
                name: "Innovative",
                about: "We pride ourselves on staying ahead of the curve with cutting-edge technology and creative approaches, delivering solutions that drive progress and set new industry standards."
            },
            {
                icon: "fluent:wallet-credit-card-20-regular",
                name: "Affordable",
                about: "We offer high-quality services at competitive rates, providing you with excellent value for your investment without compromising on quality."
            }


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
        },
        getSize(id) {
            return {
                'w-12 h-12 -ml-1 -mt-2': id === 0,
                'h-full w-full': id === 1,
                'h-20 w-20 -ml-6 -mt-6': id === 2,

            };
        },
        setDelay(id) {
            return id * 100;


        }
    }
}


</script>

<style>
.card {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
</style>
