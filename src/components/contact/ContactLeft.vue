<template>
    <div class="w-full md:w-1/2 h-fit bg-transparent px-12 sm:px-20 flex flex-col gap-3 py-5">
        <h2 class="text-5xl mt-32 font-bold">
            Discuss your <br/> Big Idea With us.
        </h2>
        <p class="text-xl my-2 max-w-[400px]">Looking for guidance on your next project or support in bringing it to life? Schedule a free meeting with our expert team, and we'll gladly explore your needs in depth.</p>
<Button :title="buttonName"/>
    </div>

</template>


<script>
import { ref } from 'vue';
import Button from '../custom/Button.vue';
export default {
    name: "ContactLeft",
    components: {
        Button
    },
    setup() {
        const buttonName = ref('Schedule a Free Meeting');
        return {
            buttonName,
        };
    },
   
};
</script>