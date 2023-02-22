<template>
    <Header />

    <!-- Body -->
    <div>
        <slot/>
    </div>

    <!-- Footer -->
    <div>
        <p>footer</p>
    </div>
</template>

<script>
    import Header from "../components/Header.vue"

    export default {
        components: {
            Header
        }
    }
</script>
