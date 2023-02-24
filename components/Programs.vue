<template>
    <div class="flex flex-col w-full h-full">
       <p class="text-3xl mb-10" id="program">MORE THAN JUST A GYM</p>
        <div class="flex flex-row items-stretch">
            <div :class="divStyle" >
                <i class="material-icons text-white text-4xl mb-2 border-2 rounded-full p-2">person</i>
                <p class="mb-2 h-full w-full text-center" id="program">Personal Training</p>
                <p class="text-center" id="program-text">One on one individualized training focused on helping our clients achieve their fitness goals. With undivided attention to our clients we help program, teach, and coach our clients so they leave with more than just a workout.</p>
            </div>
            <div :class="divStyle">
                <i class="material-icons text-white text-4xl mb-2 border-2 rounded-full p-2">group</i>
                <p class="mb-2 h-full w-full text-center" id="program">Semi-Private Training</p>
                <p class="text-center" id="program-text">2 is always better than 1. The Semi-Private Training is designed for two people to achieve their fitness goals together with unique customized workout plans for both members. You do not have to feel like you're in this alone, we got you!</p>
            </div>
            <div :class="divStyle">
                <i class="material-icons text-white text-4xl mb-2 border-2 rounded-full p-2">groups</i>
                <p class="mb-2 h-full w-full text-center" id="program">Small Group Training</p>
                <p class="text-center" id="program-text">Our small group classes are a fun and dynamic fitness program focused on delivering heart pumping and fat shedding results. In our Strength and Conditioning based HIIT classes we will generate POWERFUL movements to get you moving.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        let divStyle = 'flex flex-col items-center justify-center p-10 mr-20 w-full h-full border-2 border-white rounded'

        return {divStyle}
    }
}
</script>

<style scoped>
    #program {
        font-family: 'Montserrat', sans-serif;
        @apply text-white
    }

    #program-text {
        font-family: 'DM Sans', sans-serif;
        @apply text-white
    }

</style>