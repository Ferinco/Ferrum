<template>
    <div class="w-screen flex flex-col overflow-x-hidden relative">
        <div>
            <Landing />
            <Steps />
            <Services />
            <Contact />
        </div>
        <Monitor />
    </div>
</template>
<script>
import Contact from '@/components/contact/contact.vue';
import Monitor from '@/components/custom/monitor.vue';
import Landing from '@/components/landing.vue';
import Services from '@/components/servies/Services.vue';
import Steps from '@/components/Steps.vue';

export default {
    name: "Home",
    components: {
        Landing,
        Steps,
        Services,
        Contact,
        Monitor
    }
};
</script>
