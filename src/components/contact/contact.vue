<template>
    <div class="h-fit flex lg:flex-row flex-col justify-center relative">
        <ContactLeft/>
        <ContactRight/>

    </div>
</template>

<script>
import ContactLeft from './ContactLeft.vue';
import ContactRight from './ContactRight.vue';

export default {
    name: "ContactSection",
    components: {
        ContactLeft,
        ContactRight
    }
}
</script>