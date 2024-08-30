<template>
    <div class="w-screen overflow-x-hidden">
        <Landing/>
        <Steps/>
        <Services/>
        <Contact/>

    </div>
</template>
<script >
import Contact from '@/components/contact/contact.vue';
import Landing from '@/components/Landing/landing.vue';
import Services from '@/components/servies/Services.vue';
import Steps from '@/components/Steps.vue';

export default {
name: "Home",
components: {
    Landing,
    Steps,
    Services,
    Contact
}
}
</script>
