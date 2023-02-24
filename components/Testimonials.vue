<template>
    <p id="header">TESTIMONIALS</p>
    <div class="carousel h-[400px] relative">
        <div class="overflow-x-scroll flex h-full snap-x snap-mandatory">
            <img v-for="(testimonial, index) in testimonials"
                 :key="index"
                 :src="testimonial.image"
                 alt="testimonial-image"
                 class="w-full h-full object-cover snap-center"
            >
        </div>
        <div class="carousel-nav absolute flex top-1/2 w-full justify-between">
            <button class="text-white text-2xl p-2 rounded-[8px] flex items-center justify-center bg-gray-800 hover:bg-gray-900">
                <i class="material-icons">arrow_back_ios</i>
            </button>
            <button class="text-white text-2xl p-2 rounded-[8px] flex items-center justify-center bg-gray-800 hover:bg-gray-900">
                <i class="material-icons">arrow_forward_ios</i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
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
                name: "Sarah T.",
                description: "Kevin is an amazing personal trainer! He helped me achieve my fitness goals by providing a tailored workout plan and personalized coaching. He pushed me to my limits and motivated me to stay on track. Thanks to Kevin, I am now in the best shape of my life!",
                image: "_nuxt/assets/images/image3.png"
            },
            {
                name: "John D.",
                description: "Working with Kevin has been an incredible experience. His knowledge of fitness and nutrition is unparalleled, and he has helped me transform my body and mindset. He's patient, supportive, and always willing to go the extra mile to ensure I'm reaching my goals. I highly recommend Kevin to anyone looking for a personal trainer who truly cares about their success.",
                image: "_nuxt/assets/images/image4.png"
            },
            {
                name: "Emily R.",
                description: "Kevin is hands down the best personal trainer I've ever worked with. His approach is both challenging and rewarding, and he never fails to keep me motivated and engaged during our sessions. He's also great at adapting workouts to my abilities and ensuring that I'm always making progress. I can't recommend him enough!",
                image: "_nuxt/assets/images/image5.png"
            }, 
            {
                name: "Alex S.",
                description: "I've been training with Kevin for several months now, and I'm incredibly impressed with the results. His expertise and guidance have helped me reach new levels of fitness and strength, and I'm grateful for his encouragement and support throughout the journey. Kevin is a top-notch personal trainer, and I would recommend him to anyone looking to take their fitness to the next level.",
                image: "_nuxt/assets/images/image6.png"
            },
            {
                name: "Samantha K.",
                description: "Kevin is simply amazing! He's knowledgeable, patient, and always pushes me to achieve my best. He's helped me overcome obstacles and reach goals I never thought possible. I'm so grateful to have him as my personal trainer, and I can't imagine my fitness journey without him.",
                image: "_nuxt/assets/images/image7.jpg"
            },
            {
                name: "David B.",
                description: "I was hesitant to work with a personal trainer, but Kevin has been a game-changer. He's helped me set realistic goals and create a sustainable workout plan. He's always available for questions and feedback, and his positive attitude is infectious. Thanks to Kevin, I'm more confident and motivated than ever before!",
                image: "_nuxt/assets/images/image8.jpg"
            },
            {
                name: "Rachel M.",
                description: "Kevin is the perfect combination of tough and supportive. He challenges me to push past my limits and never lets me settle for less than my best. He also takes the time to understand my goals and makes sure I'm on track to achieve them. I'm so grateful to have him as my personal trainer!",
                image: "_nuxt/assets/images/image9.jpg"
            },
            {
                name: "Jason L.",
                description: "I can't say enough good things about Kevin! He's not only an excellent personal trainer but also a wonderful person. He's patient, kind, and always goes above and beyond to help his clients. He's helped me build strength and confidence, and I'm so grateful for his guidance and support.",
                image: "_nuxt/assets/images/image10.jpg"
            }

        ]
        }
    }
}
</script>

<style scoped>
    #header {
        font-family: 'Montserrat', sans-serif;
        @apply text-white text-3xl mb-20
    }

    .testimonial {
        @apply text-white
    }

    .carousel-container {
        /* scroll-snap-type: x mandatory; */
    }
    .carousel-container::-webkit-scrollbar {
        /* display: none; */
    }

</style>