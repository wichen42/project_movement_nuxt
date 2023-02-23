<template>
    <div class="flex bg-black flex-row justify-between min-w-full items-center mb-24 py-5 px-10 fixed left-0 top-0 z-30" id="homepage">
        <div class="flex flex-row items-center justify-center">
            <div class="h-full w-full">
                <img class="mr-10" src="../assets/images/LogoGold.png" alt="logo">
            </div>            
            <div class="h-full w-full flex justify-between items-center">
                <a class="anchor" href="#homepage">Home</a>
                <a class="anchor" href="#programs">Programs</a>
                <a class="anchor" href="#testimonials">Testimonials</a>
                <a class="anchor" href="#contact">Contact Us</a>
            </div>
        </div>

        <div class="pl-30">
            <button class="text-black bg-[#D7BE69] py-3 px-10 rounded container">Become a Member</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrolled: false
        }
    },
    setup() {
        let blackBG = "flex flex-row justify-between items-center m-5 mb-24 pt-10 fixed top-0 z-30 container mx-auto"
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0
        }
    }
}
</script>