<template>
    <div class="w-full relative lg:bg-gradient-to-r from-white from-50% to-green-500 to-50%">
        <div class="h-full flex flex-col w-screen overflow-x-hidden gap-8" ref="section">
            <div class="my-16 md:my-28 h-full flex flex-col gap-10">
                <h2 class="px-8 sm:px-20 text-4xl lg:text-5xl font-semibold lg:font-bold lg:w-3/6 leading-tight">
                    Why we are different from other agencies.
                </h2>
                <div class="flex flex-col lg:flex-row justify-between lg:gap-0 gap-12 mt-10">
                    <div class="px-8 sm:px-20 flex flex-col gap-5 lg:w-1/2">
                        <h2 class="font-semibold text-2xl flex  items-center gap-1">Octodos Agency: <iconify-icon
                            icon="mdi:person-outline" noobserver class="text-red-500 text-[1.1em]"></iconify-icon>
                        </h2>
                        <div class="flex flex-col gap-4">
                            <div v-for="(item, index) in good" :key="index" class="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="30" viewBox="0 0 41 30"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M39.4792 0.617426C39.7266 0.833647 39.9289 1.09651 40.0746 1.39099C40.2203 1.68547 40.3066 2.00579 40.3284 2.33362C40.3502 2.66146 40.3072 2.99038 40.2018 3.30157C40.0964 3.61277 39.9307 3.90014 39.7142 4.14724L17.8403 29.146C17.4049 29.6437 16.7901 29.9486 16.1304 29.9941C15.4708 30.0395 14.8199 29.8218 14.3205 29.3884L1.19614 18.0265C0.694573 17.5923 0.386064 16.9765 0.338479 16.3148C0.290894 15.6531 0.508132 14.9995 0.942402 14.498C1.37667 13.9964 1.9924 13.6879 2.65413 13.6403C3.31587 13.5927 3.9694 13.81 4.47097 14.2442L15.7129 23.9812L35.9493 0.854913C36.3856 0.355677 37.0023 0.050189 37.6638 0.00565161C38.3253 -0.0388858 38.9799 0.181176 39.4792 0.617426Z"
                                        fill="#059F27" class=""></path>
                                </svg>
                                <p class="text-lg font-medium leading-6">{{ item.description }}</p>
                            </div>

                        </div>
                    </div>

                    <div class="px-8 sm:px-20 flex flex-col gap-5 lg:w-1/2 lg:text-white">
                        <h2 class="font-semibold text-2xl flex  items-center gap-1">Most Agencies: <iconify-icon
                                icon="fe:disabled" noobserver class="text-red-500 text-[1em]"></iconify-icon>
                        </h2>
                        <div class="flex flex-col gap-4">
                            <div v-for="(item, index) in good" :key="index" class="flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30"
                                    fill="none">
                                    <g clip-path="url(#clip0_38_272)">
                                        <path
                                            d="M2.60837 30.024C2.11081 30.024 1.61289 29.8336 1.23423 29.4546C0.474005 28.6947 0.474005 27.4662 1.23423 26.7063L27.3457 0.594557C28.1056 -0.165308 29.3341 -0.165308 30.094 0.594557C30.8541 1.35442 30.8541 2.58296 30.094 3.34283L3.9825 29.4546C3.80237 29.6355 3.5882 29.7789 3.35236 29.8767C3.11652 29.9744 2.86366 30.0245 2.60837 30.024Z"
                                            fill="#F44336"></path>
                                        <path
                                            d="M28.7198 30.024C28.2223 30.024 27.7247 29.8336 27.3457 29.4546L1.23423 3.34283C0.474005 2.58296 0.474005 1.35433 1.23423 0.594557C1.9941 -0.165308 3.22228 -0.165308 3.9825 0.594557L30.094 26.7063C30.8541 27.4662 30.8541 28.6948 30.094 29.4546C29.715 29.8354 29.2174 30.024 28.7198 30.024Z"
                                            fill="#F44336"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_38_272">
                                            <rect width="30" height="30" fill="white" transform="translate(0.664062)">
                                            </rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="text-lg font-medium leading-6">{{ item.description }}</p>
                            </div>

                        </div>
                    </div>
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
    // mounted() {
    //     this.cardsRef = this.$refs.card
    //     gsap.to(this.cardsRef, {
    //         xPercent: -100 * (this.cardsRef.length - 1),
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: this.$refs.section,
    //             pin: true,
    //             scrub: 1,
    //             end: '+=3000'
    //         }
    //     })


    // },
    data() {
        const buttonName = ref('Hire Us Now!');
        return {
            buttonName,
            cardsRef: ref(null),
            good: [
                {
                    description: 'Discuss your project needs with our experts to craft a tailored solution that meets your goals.'
                },
                {
                    description: 'We bring creative and cutting-edge ideas to transform your vision into a unique digital experience.'
                },
                {
                    description: 'Our developers turn concepts into reality, ensuring robust and scalable websites or applications.'
                },
                {
                    description: 'We deliver a polished final product, ensuring your project is launched on time and to specification.'
                },
            ],
            bad: [
                {
                    description: 'Discuss your project needs with our experts to craft a tailored solution that meets your goals.'
                },
                {
                    description: 'We bring creative and cutting-edge ideas to transform your vision into a unique digital experience.'
                },
                {
                    description: 'Our developers turn concepts into reality, ensuring robust and scalable websites or applications.'
                },
                {
                    description: 'We deliver a polished final product, ensuring your project is launched on time and to specification.'
                },
            ]


        }
    },
    // methods: {
    //     getClassName(id) {
    //         return {
    //             'text-blue-300': id === 0,
    //             'text-green-300': id === 3,
    //             'text-yellow-300': id === 2,
    //             'text-red-300': id === 1,
    //         };
    //     }
    // }

}
</script>
<style>
.item-card {
    /* box-shadow:
        rgba(0, 0, 0, 0.6) 5px 5px,
        rgba(0, 0, 0, 0.5) 10px 10px */
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.hire {
    box-shadow: rgba(0, 0, 0, 0.4) 5px 5px
}
</style>
