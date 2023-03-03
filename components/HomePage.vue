<template>
    <div class="flex flex-row w-full h-full items-center mt-52 pb-40">
        <div class="flex flex-col h-full w-3/5 m-5"> 
            <div class="w-full h-full">
                <p class="HomePageGraphicsText mb-5">YOUR ASSIGNMENT IS FITNESS &nbsp;- </p>
                <p class="HomePageGraphicsText mb-10 ml-72" >JOIN THE MVMT</p>
            </div>
            <div class="w-full h-full mb-10">
                <p class="HomePageText w-5/6 text-lg">PRJCT MVMT is a boutique fitness studio focused on making you feel, look, and MOVE better! Join us now to make fitness part of your everyday lifestyle whether it's one on one training or our small group training, we’ll get you moving.</p>
            </div>
            <div class="flex flex-row items-center">
                <div class="bg-[#D4AF37] p-2 px-8 rounded mr-10 cursor-pointer" @click="handleJoin">Join Now</div>
                <div class="text-white underline cursor-pointer" @click="handleMore">Learn More</div>
            </div>
        </div>
        
        <div class="w-3/6 h-full">
            <img src="../assets/images/HomePageGraphic.png" alt="Home-Page-Graphic">
        </div>
    </div>

</template>

<script>


export default {
methods: {
    handleJoin() {
        window.scrollTo({
            top: 2800,
            behavior: 'smooth'
        })
    },
    handleMore() {
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        })
    }
}
}
</script>

<style scoped>


</style>