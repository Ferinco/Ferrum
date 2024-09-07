<template>
    <div class="lg:bg-gradient-to-r from-white from-50% to-[#18A999] to-50% contact">
        <div class="flex flex-col my-32 lg:px-20 px-8 gap-10 w-full">
            <div class="flex flex-col lg:flex-row   justify-between items-center">
                <div class="flex flex-col gap-10 grow-0 lg:w-1/3 w-full text-center">
                    <h2 class="text-4xl font-medium my-5">Contact Octodos</h2>

                    <div class="flex flex-col justify-between items-center text-center h-full gap-3">
                        <p class="text-3xl">
                            Can't wait to bring your ideas to life?
                        </p>
                        <Button :title="buttonName" />
                    </div>
                    <div class="flex flex-col justify-between h-full items-center text-center gap-3">
                        <p class="text-3xl">
                            Need to meet us for some consultation to further discuss business?
                        </p>
                        <Button :title="buttonName" class="first" />
                    </div>
                </div>
                <div class="flex flex-col lg:absolute gap-4 lg:gap-0 right-0 lg:pr-20 mt-24 lg-mt-0">
                    <div class="p-5 rounded-lg h-fit border w-fit flex items-center gap-5 cursor-pointer duration-100 hover:z-10 hover:rotate-0 z-30"
                        v-for="social in socials" :class="getClassName(social.id)">
                        <div class="h-9 border w-9"></div>
                        <div class="text-white text-2xl">
                            <h3>{{ social.about }}</h3>
                        </div>
                    </div>
                </div>
                <!-- <div class="flex flex-col justify-between h-full items-start">
                    <p>
                        Follow Octodos
                    </p>
                    <div class="flex gap-3">
                        <a href="">
                            <iconify-icon icon="hugeicons:new-twitter" noobserver
                                class="text-black text-[2em]"></iconify-icon>
                        </a>
                        <a href="">
                            <iconify-icon icon="ph:instagram-logo" noobserver
                                class="text-black text-[2em]"></iconify-icon>
                        </a>
                         <a href="">
                            <iconify-icon icon="ant-design:linkedin-filled" noobserver
                                class="text-black text-[2em]"></iconify-icon>
                        </a> 
                        <a href="">
                            <iconify-icon icon="mdi:facebook" noobserver
                                class="text-black text-[2em]"></iconify-icon>
                        </a>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import Button from '@/components/custom/Button.vue';
import { ref } from 'vue';

const buttonName = ref("hello@octodos.com");
export default {
    name: "ContactPage",
    setup() {
        const buttonName = ref("hello@octodos.com");
        const socials = ref([
            {
                id: 0,
                icon: "fluent:laptop-20-filled",
                about: "Reach out to us via Email"
            },
            {
                id: 1,
                icon: "fluent:phone-20-filled",
                about: "Message us on WhatsApp"
            },
            {
                id: 2,
                icon: "clarity:email-solid",
                about: "Connect with us on LinkedIn"
            },
            {
                id: 3,
                icon: "mdi:bricks",
                about: "Follow our X/Twitter page."
            }
        ]

        );
        return {
            buttonName,
            socials
        };
    },
    components: {
        Button
    },
    methods: {
        getClassName(id) {
            return {
                'bg-blue-500 rotate-6 hover:mb-5': id === 0,
                'bg-green-500 -rotate-6 hover:my-5': id === 1,
                'bg-yellow-500 -rotate-6 hover:my-5': id === 2,
                'bg-red-500 rotate-6  hover:mt-5': id === 3,
            };
        }
    }

};
</script>
<style>
.left {
    /* background-image: url(../../public/favicon.png) */
}
</style>