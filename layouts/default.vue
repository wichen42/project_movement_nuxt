<template>
    <Header />

    <!-- Body -->
    <div>
        <slot/>
    </div>

    <Footer />
</template>

<script>
    import Header from "../components/Header.vue"

    export default {
        components: {
            Header
        }
    }
</script>
