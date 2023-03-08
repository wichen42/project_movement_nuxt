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
        },
        methods: {
            handleView() {
                    this.mobileView = window.innerWidth <= 768;
            }
        },
        mounted() {
            this.handleView();
            window.addEventListener('resize', this.handleView);
        },
        beforeDestroy() {
            if (process.client) {
                window.removeEventListener('load', this.handleView);
            }
        },
    }
</script>

<style scoped>
    @media screen and (max-width: 768px) {
  .header {
    display: none;
  }
}
</style>
