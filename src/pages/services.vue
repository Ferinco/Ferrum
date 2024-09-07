<template>
    <div class="flex flex-col justify-center items-center mt-32">
        <div class="flex flex-col text-center gap-2">
            <h1 class="text-5xl lg:text-6xl font-bold lg:font-extrabold">
                What we do
            </h1>
            <p class="lg:text-3xl text-xl max-w-[750px] text-center">Innovative solutions and ideas to help your
                business dominate its niche.</p>
        </div>
    </div>
    <div class="lg:px-20 px-8 my-10">
        <div
            class="h-fit rounded-3xl px-5 py-7 flex gap-10 bg-gradient-to-tl from-green-500 via-green-500 to-green-700 long-card">
            <div class="h-auto w-1/3 rounded-3xl bg-[#34D399] overflow-hidden">
                <lottie-player src="https://lottie.host/7e96b964-3814-469f-b352-8825a5dcc549/xVjrNsOIVy.json"
                    background="transparent" speed="1" style="width: 100%; max-height: 340px; border-radius: 20px;" loop
                    autoplay direction="1" mode="normal">
                </lottie-player>
            </div>


            <div class="grid grid-cols-2 gap-5 w-3/4">
                <div v-for="(item, index) in list" :key="index" class="flex flex-col gap-1">
                    <p class="text-2xl font-medium text-white underline">{{ item.title }}</p>
                    <p class="text-white">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <!-- <Button/> -->
    </div>
</template>
<script>
import Button from '@/components/custom/Button.vue';

export default {
    name: "Services",
    setup() {
        const list = [
            {
                title: "Web & Mobile Applications",
                description: "Designing and developing user-friendly websites and mobile apps that deliver seamless experiences across devices."
            },
            {
                title: "Ecommerce Solutions",
                description: "Providing robust and scalable ecommerce platforms to boost your online business and drive sales growth."
            },
            {
                title: "3rd Party Integrations",
                description: "Seamlessly connecting your business systems with third-party services to enhance functionality and efficiency."
            },
            {
                title: "Business Branding",
                description: "Building a strong and cohesive brand identity that resonates with your target audience and elevates your business."
            },
            {
                title: "Product Management",
                description: "Guiding your product from concept to launch with strategic planning and efficient execution."
            }

        ];
        return {
            list
        };
    },
    components: {
        Button
    }

};
</script>
<style>
.long-card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>