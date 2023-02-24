<template>
    <div class="flex flex-col">
        <p id="header">TESTIMONIALS</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testimonials: {
                name: "Carl S."
            }
        }
    }
}
</script>

<style scoped>
    #header {
        font-family: 'Montserrat', sans-serif;
        @apply text-white text-3xl
    }
</style>