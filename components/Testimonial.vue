<template>
    <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full h-full">
        <img :src="testimonial.image" alt="testimonial-image" class="h-full w-full">
    </div>
</template>

<script>

export default {
    props: ['testimonials']
}
</script>

<style scoped>

</style>