<template>
    <div class="w-full md:w-1/2 h-auto bg-[#18A999] flex flex-col px-12 sm:px-20 items-center justify-center gap-5 py-5">
        <div class="my-32 flex flex-col gap-3">
            <div class="p-5 rounded-lg h-fit border w-fit flex items-center gap-5 cursor-pointer duration-100 hover:z-10 hover:rotate-0" v-for="social in socials" :class="getClassName(social.id)">
            <div class="h-9 border w-9"></div>
            <div class="text-white text-2xl">
                <h3>{{ social.about }}</h3>
            </div>
            </div>
        </div>
    </div>

</template>


<script>
import { ref } from 'vue';

export default {
    name: "ContactRight",
    setup() {
        const socials = ref([
            {
                id: 0,
                icon: "fluent:laptop-20-filled",
                about: "Send us an email"
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
        }
    }

};
</script>