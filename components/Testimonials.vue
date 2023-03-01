<template>
    <p id="header">TESTIMONIALS</p>
    <swiper class="border-b-2 cursor-grab border-white h-full w-full m-auto my-24"
        :slides-per-view="3"
        :modules="modules"
        :space-between="20"
        :loop="true"
        :pagination="{clickable: true}"
        :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }"
    >
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="text-white flex items-center justify-center relative h-82">
                <img
                    class="object-cover h-full w-full opacity-40" 
                    :src="testimonial.image" 
                    alt="testimonial-image"
                >
                <h2 class="text-white absolute top-20">{{ testimonial.name }}</h2>
                <p class="text-white absolute text-center">{{ testimonial.description }}</p>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { ref } from 'vue'

export default {
    components: { Swiper, SwiperSlide },
    setup() {
        const testimonials = ref([
            {
                name: "Carl S.", 
                description: "I'm a Veteran, with a nasty case of PTSD. I tore up my back muscles and shredded nerves, leaving me uncomfortable, to say the least. Eight sessions with Kevin has put me back on the road to actually being physically able. My bum shoulder has dramatically improved the range of motion, and significantly reduced pain. My back muscles are again working, and my sense of balance is significantly improved. He identified the exercises and machines most likely to help me heal, and so they have.",
                image: "_nuxt/assets/images/image1.png"
            },
            {
                name: "Trevor T.",
                description: "I have an unusual history that had slowed my progress and that makes some tasks much more difficult for me than for others. Kevin had the appropriate expertise to coach with my situation in mind. Kevin’s coaching has helped me push my limits beyond what I had thought was previously possible while still taking account of my individual, challenging situation. I have made much more progress with Kevin than I ever would have on my own, and I would highly recommend his coaching for anyone who is interested!",
                image: "_nuxt/assets/images/image2.png"
            },
            {
                name: "Winnie L.",
                description: "Very attentive coach. Kevin programed a challenging yet fun program for us and it was non-stop burning in a good way. Was always correcting form and gave great motivation throughout the workout. You feel very nurtured and cared for which is super great for people like me who needs the reassurance when it comes to doing new things/workouts.",
                image: "_nuxt/assets/images/image3.png"
            },
            {
                name: "Jacky R.",
                description: "Kevin’s class was amazing! Despite working out consistently on my own, he has managed to push me to my limits each time,whether a 1 on 1 training session or a conditioning class. Would do it again.",
                image: "_nuxt/assets/images/image4.png"
            },
            {
                name: "Donald N.",
                description: "Instructor is very thorough. He is very articulate with explaining proper forms of exercises. Over super cool and genuine guy in general! Will be going back!",
                image: "_nuxt/assets/images/image5.png"
            }, 
            {
                name: "Stephanie L.",
                description: "I took a Wednesday night HIIT class with Kevin. Being relatively inexperienced and not having taken a HIIT class in a few years, I was greeted with a really kind demeanor and reassurance that I can modify any exercises as needed to meet my level. The class was intense, fun, and went by so quickly because of the fast pace. Kevin made sure to check in with the whole class to make sure we understood the workouts and did everything safely. I already have my next class booked and am looking forward to continuing my journey at this studio!",
                image: "_nuxt/assets/images/image6.png"
            },
            {
                name: "Wai W.",
                description: "Kevin explained the workouts concisely and individualized his coaching style to everyone's fitness goals and levels. Throughout the class, Kevin continuously motivated us, which made it an overall fun and upbeat class. The studio is extremely clean and organized with a variety of cables, racks, dumbbells and kettlebells of varying weights as well as cardio equipment. I would highly recommend anyone of any fitness level to try out his various small group training options or to seek his expertise in advancing their fitness and nutritional goals.",
                image: "_nuxt/assets/images/image7.jpg"
            },
            {
                name: "Lulu W.",
                description: "Kevin was a great instructor! He thoroughly explained all the warm-ups and the workouts. He encouraged us throughout the class and corrected our forms, when necessary. Not only was the class informative, but it was so much fun! All the equipment was well-cleaned and kept. It was a studio that felt intimate and not as intimidating. Did I mention how great the lighting was??! You can tell Kevin really cares about his clients the way he communicated with everyone there. All in all, Kevin exceeded my expectations with his workout class, and I'm already looking forward to attending his future classes.",
                image: "_nuxt/assets/images/image8.jpg"
            },
            {
                name: "Cindy K.",
                description: "I’ve been using Kevin as a coach for over a year and have seen so much progress on my strength and fitness goals. When he opened his studio, I jumped at the chance to take a group class which focused on strength. He listens, is able to provide various options for all leveling, and all while making the class challenging enough to push for results. He is an expert in all things fitness and nutrition and I cannot recommend him enough for those open to getting their fitness game to the next level.",
                image: "_nuxt/assets/images/image9.jpg"
            },
            {
                name: "Valerie N.",
                description: "Kevin’s studio just opened and I had the honor to experience one of his strength & conditioning workout class. As someone who enjoys taking a workout class every few weeks, Kevin’s class did not disappoint! I love to challenge myself and I love having fun while working out and his class delivered what I was hoping for.",
                image: "_nuxt/assets/images/image10.jpg"
            }
        ])

        return { modules: [Pagination, Autoplay], testimonials }
    }

}
</script>

<style scoped>
    #header {
        font-family: 'Montserrat', sans-serif;
        @apply text-white text-3xl mb-20
    }

</style>