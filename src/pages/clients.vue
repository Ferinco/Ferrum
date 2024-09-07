<template>
    <div class="flex flex-col">
        <!-- <div class="flex flex-col lg:flex-row justify-between items-center lg:px-20 px-8 my-24">
            <div class="flex flex-col text-start gap-2 w-full lg:w-1/2">
                <h1 class="text-5xl font-bold lg:font-extrabold">
                    Clients & Testimonials
                </h1>
                <p class="text-xl text-start">Over the years, we have collaborated with a wide range of clients across
                    various industries, consistently delivering impactful solutions that foster long-lasting
                    relationships. Our commitment to excellence is reflected not only in the quality of the work we
                    produce but also in the dedicated post-development support we offer, ensuring that our clients
                    continue to thrive long after the project is completed.</p>
            </div>
            <div class="flex flex-col w-full lg:w-1/3 gap-3 mt-10 lg:mt-0">
                <div class="bg-black w-full h-[150px]"></div>
                <div class="bg-black w-full h-[100px]"></div>

            </div>
        </div> -->
        <!-- <div class="grid grid-cols-4 gap-3">
            <div class="border h-60 border-red-500" v-for="item in 4"></div>
        </div> -->
        <div class="h-fit w-full bg-green-700 flex flex-col items-center px-10 py-32">
            <div class="flex flex-col w-full justify-center items-center text-center text-white">
                <h2 class="text-4xl">Here are what how clients say about us</h2>
                <p class="max-w-[500px] text-lg leading-6">Join various clients to build your udea and take your
                    business to the next level.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-5 my-5">
                <div class="max-h-[350px] w-fit py-2 px-7 rounded-xl flex flex-col justify-between my-1 gap-4"
                    v-for="(testimonial, index) in testimonials" :class="index % 2 === 0 ? 'text-white bg-green-800' : 'text-transparent bg-gradient-to-t from-green-700 via-green-700 to-green-800'">
                    <iconify-icon icon="oui:quote" noobserver class="text-yellow-600 text-[4em] -mt-6" :class="index % 2 === 0 ? 'even-class' : 'hidden'"></iconify-icon>
                    <p class="text-xl -mt-2">{{ testimonial.statement }}</p>
                    <div class="flex lg:flex-row md:flex-col justify-between w-full">
                        <div class="leading-5">
                            <p>{{ testimonial.name }}</p>
                            <p>{{ testimonial.company }}</p>
                        </div>
                        <div class="block h-16 w-16 rounded-full -mb-5" :class="index % 2 === 0 ? 'even-class bg-green-800 flex justify-center items-center' : 'hidden'">
                            <div class="w-[80%] h-[80%] bg-black rounded-full">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Clients",
    setup() {
        const testimonials = [
            { statement: "Their service was truly exceptional, and the team went above and beyond to meet our needs.", name: "John Doe", company: "Tech Solutions Ltd." },
            { statement: "Their service was truly exceptional, and the team went above and beyond to meet our needs.", name: "John Doe", company: "Tech Solutions Ltd." },
            { statement: "Their service was truly exceptional, and the team went above and beyond to meet our needs.", name: "John Doe", company: "Tech Solutions Ltd." },
            { statement: "Their service was truly exceptional, and the team went above and beyond to meet our needs.", name: "John Doe", company: "Tech Solutions Ltd." },
            { statement: "I would definitely recommend their services to anyone looking for quality and reliability in a partner.", name: "David Wilson", company: "Future Vision LLC" },
            { statement: "Their service was truly exceptional, and the team went above and beyond to meet our needs.", name: "John Doe", company: "Tech Solutions Ltd." },
        ];
        return {
            testimonials
        };
    }
};
</script>