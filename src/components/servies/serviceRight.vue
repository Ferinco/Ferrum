<template>
    <div class="w-full md:w-1/2 h-auto bg-green-500 flex flex-col justify-center">
        <div class="my-32 px-12 sm:px-20">
            <swiper-container ref="swiperEl" slides-per-view="1" speed="500" loop="false" css-mode="true">
                <swiper-slide v-for="(slide, index) in slides" :key="index" class="h-80">
                    <div class="h-72 w-[400px] bg-white slide-div flex flex-col justify-center items-start rounded-lg p-5 gap-6">
                        <p class="text-2xl">
                            {{ slide.statement }}
                        </p>
                        <div class="flex flex-col items-end text-start w-full">
                            <div>
                                <h6 class="font-medium text-lg">{{ slide.name }}</h6>
                                <p>{{ slide.company }}</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper-container>
            <div class="flex justify-end mt-5 lg:pr-9">

                <button @click="slideNext">
                    <iconify-icon icon="ic:round-greater-than" noobserver class="text-white text-[2em]"></iconify-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    name: "ServiceRight",
    setup() {
        const swiperEl = ref(null);

        const slideNext = () => {
            if (swiperEl.value && swiperEl.value.swiper) {
                swiperEl.value.swiper.slideNext();
            }
        };

        onMounted(() => {
            if (swiperEl.value) {
                swiperEl.value.swiper = new Swiper(swiperEl.value, {
                    slidesPerView: 1,
                    speed: 500,
                    loop: true,
                    cssMode: true,
                });
            }
        });

        const slides = [
        { statement: "Their service was truly exceptional, and the team went above and beyond to meet our needs.", name: "John Doe", company: "Tech Solutions Ltd." },
    { statement: "Working with them was a seamless experience, and their professionalism made the project a success.", name: "Jane Smith", company: "Creative Minds Inc." },
    { statement: "They delivered exactly what we envisioned, with impressive attention to detail and timely execution.", name: "Michael Brown", company: "Innovatech Corp." },
    { statement: "Their communication was excellent, and the results far exceeded our expectations. Highly recommended.", name: "Emily Davis", company: "Design Hub Co." },
    { statement: "I would definitely recommend their services to anyone looking for quality and reliability in a partner.", name: "David Wilson", company: "Future Vision LLC" },
    { statement: "The team was efficient, reliable, and consistently delivered high-quality work throughout the project.", name: "Sarah Johnson", company: "WebWorks Agency" }
        ];

        return {
            swiperEl,
            slideNext,
            slides
        };
    }
};
</script>
<style>
.slide-div {
    box-shadow: rgba(0, 0, 0, 0.9) 10px 10px
}
</style>
