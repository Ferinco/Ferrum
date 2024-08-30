<template>
    <div class="w-full relative bg-gradient-to-r from-white from-50% to-yellow-500 to-50%">
        <div class="px-20 h-full flex flex-col w-screen overflow-x-hidden gap-8" ref="section">
            <div class="my-32 h-full flex flex-col gap-10">
                <h2 class="text-5xl font-bold max-w-[350px]">
                    How we do what we do.
                </h2>
    
                <div class="card-wrapper flex flex-row pl-64 gap-10 h-fit" ref="cardWrapper">
                    <template v-for="(item, index) in items" :key="index">
                        <div class="item-card flex flex-col gap-8 h-auto w-[350px] flex-shrink-0 bg-[#F7F0F0] text-black p-5 my-4 overflow-hidden"
                            ref="card">
                            <div class="flex flex-row justify-between">
                                <h2 class="my-3 text-5xl w-1/2 break-words font-semibold">{{ item.title }}</h2>
                                <div class="img-wrapper h-36 w-36 justify-end">
                                    <iconify-icon :icon="item.image" noobserver class="text-[20em] -mt-28 -rotate-12" :class="getClassName(index)"></iconify-icon>
                                </div>
                            </div>
                            <div class="card-content p-4">
                                <p class="text-lg">{{ item.description }}</p>
                            </div>
                        </div>
                    </template>
    
                </div>
            </div>
            <!-- <div class="flex justify-center ml-52 h-fit mt-7">
                <button class="text-white bg-green-800 px-7 py-3 rounded-lg font-semibold">Hire Us Today!</button>
            </div> -->
        </div>

    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Button from './custom/Button.vue';
gsap.registerPlugin(ScrollTrigger)

export default {
    name: 'Steps',
    components: {
        Button,
    },
    mounted() {
        this.cardsRef = this.$refs.card
        gsap.to(this.cardsRef, {
            xPercent: -100 * (this.cardsRef.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: this.$refs.section,
                pin: true,
                scrub: 1,
                end: '+=3000'
            }
        })


    },
    data() {
        const buttonName = ref('Hire Us Now!');
        return {
            buttonName,
            cardsRef: ref(null),
            items: [
                {
                    image: "fluent:device-meeting-room-48-filled",
                    title: 'Consult',
                    description: 'Discuss your project needs with our experts to craft a tailored solution that meets your goals.'
                },
                {
                    image: "tabler:bulb-filled",
                    title: 'Innovation',
                    description: 'We bring creative and cutting-edge ideas to transform your vision into a unique digital experience.'
                },
                {
                    image: "mdi:bricks" ,
                    title: 'Building',
                    description: 'Our developers turn concepts into reality, ensuring robust and scalable websites or applications.'
                },
                {
                    image: 'bxs:bowl-hot',
                    title: 'Delivery',
                    description: 'We deliver a polished final product, ensuring your project is launched on time and to specification.'
                },
            ]

        }
    },
    methods: {
        getClassName(id) {
            return {
                'text-blue-300': id === 0,
                'text-green-300': id === 3,
                'text-yellow-300': id === 2,
                'text-red-300': id === 1,
            };
        }
    }

}
</script>
<style>
.item-card {
    box-shadow:
        rgba(65, 169, 24, 0.4) 5px 5px,
        rgba(24, 169, 153, 0.3) 10px 10px,
        rgba(12, 97, 88, 0.2) 15px 15px,
        rgba(8, 65, 59, 0.1) 20px 20px,
        rgba(0, 0, 0, 0.05) 25px 25px;
}

.hire {
    box-shadow:rgba(0, 0, 0, 0.4) 5px 5px
}
</style>
