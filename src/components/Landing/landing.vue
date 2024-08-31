<template>
<div class="flex flex-col md:flex-row h-fit">
    <Right/>
    <Left/>
</div>
</template>

<script>
import Left from './left.vue';
import Right from './right.vue';
export default {
    name: "Landing",
    components: {
    Right,
    Left,
    
  }
};
</script>