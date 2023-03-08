<template>
    <div :class="headerStyle" class="flex bg-black justify-between min-w-full items-center mb-24 py-5 px-10 fixed left-0 top-0 z-30" id="homepage">
        <div class="flex flex-row items-center justify-center">
            <div class="h-full w-full">
                <img class="mr-10 pl-16" :src="logoStyle" alt="logo">
            </div>            
            <div class="h-full w-full flex justify-between items-center">
                <button :class="homeStyle" @click="handleHome" class="anchor">Home</button>
                <button :class="programStyle" @click="handleProgram" class="anchor">Programs</button>
                <button :class="testimonialStyle" @click="handleTestimonial" class="anchor">Testimonials</button>
                <button :class="contactStyle" @click="handleContact"  class="anchor">Contact Us</button>
            </div>
        </div>

        <div class="mr-32">
            <button class="text-black bg-[#D4AF37] py-3 px-10 rounded container" @click="handleContact">Become a Member</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrolled: false,
            home: false,
            program: false,
            testimonial: false,
            contact: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0
            this.home = window.scrollY === 0
            this.program = window.scrollY >= 800 && window.scrollY < 2100
            this.testimonial = window.scrollY >= 2100 && window.scrollY < 2800
            this.contact = window.scrollY >= 2800
        },
        handleHome() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        handleProgram() {
            window.scrollTo({
                top: 800,
                behavior: 'smooth'
            })
        },
        handleTestimonial() {
            window.scrollTo({
                top: 2100,
                behavior: 'smooth'
            })
        },
        handleContact() {
            window.scrollTo({
                top: 2800,
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
        homeStyle() {
            return this.scrolled ? 'text-black' : 'text-[#D4AF37]'
        },  
        programStyle() {
            return this.scrolled ? (this.program ? 'text-[#D4AF37]' : 'text-black') : ''
        },
        testimonialStyle() {
            return this.scrolled ? (this.testimonial? 'text-[#D4AF37]' : 'text-black') : ''
        },  
        contactStyle() {
            return this.scrolled ? (this.contact ? 'text-[#D4AF37]' : 'text-black') : ''
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