<template>
    <Header v-if="!mobileView"/>

    <!-- Body -->
    <div>
        <slot/>
    </div>

    <Footer />
</template>

<script>
    import Header from "../components/Header.vue"

    export default {
        data: () => {
            return {
                mobileView: false,
                showNav: false,
            }
        },  
        components: {
            Header
        }
    }
</script>
