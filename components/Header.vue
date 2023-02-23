<template>
    <div :class="headerStyle" class="flex bg-black flex-row justify-between min-w-full items-center mb-24 py-5 px-10 fixed left-0 top-0 z-30" id="homepage">
        <div class="flex flex-row items-center justify-center">
            <div class="h-full w-full">
                <img class="mr-10" :src="logoStyle" alt="logo">
            </div>            
            <div class="h-full w-full flex justify-between items-center">
                <button :class="anchorStyle" @click="handleHome" class="anchor">Home</button>
                <button :class="anchorStyle" class="anchor">Programs</button>
                <button :class="anchorStyle" class="anchor">Testimonials</button>
                <button :class="anchorStyle" class="anchor">Contact Us</button>
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
            scrolled: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0
        },
        handleHome() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    },
    computed: {
        headerStyle() {
            return this.scrolled ? 'bg-white' 
            : ''
        },
        anchorStyle() {
            return this.scrolled ? 'text-black' : ''
        },
        logoStyle() {
            if (this.scrolled) {
                return '_nuxt/assets/images/LogoBlack.png'
            } else {
                return '_nuxt/assets/images/LogoGold.png'
            }
        }
    }
}
</script>