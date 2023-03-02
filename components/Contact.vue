<template>
    <div class="flex flex-col w-5/6 pb-40">
        <div id="header" class="text-white text-3xl mb-10"><span class="text-[#D7BE69]">JOIN NOW</span> TO GET IN SHAPE</div>
        <p>We're here to help you achieve your fitness goals! If you have any questions or feedback, please don't hesitate to contact us using the form below.</p>
        <p class="mb-12">Thank you for considering Fitness Studio for your fitness journey. We look forward to hearing from you and helping you achieve your goals!</p>
        <form action="#" class="w-4/6">
            <input type="text" name="name" class="form-input" placeholder="NAME">
            <input type="text" name="email" class="form-input" placeholder="EMAIL">
            <input type="text" name="phone" class="form-input" placeholder="Phone Number">
            <div>
                <select name="programs" class="form-input">
                    <option value="">Which program are you interested in?</option>
                    <option value="">Personal Training</option>
                    <option value="">Small Group Training</option>
                </select>
            </div>
            <textarea name="message" class="form-input" cols="50" rows="5" placeholder="MESSAGE"></textarea>
            <button class="mt-5 rounded-lg bg-[#D4AF37] hover:bg-white text-black px-20 py-3 transition duration-500 hover:text-primary-500 hover:bg-white">SUBMIT</button>
        </form>
    </div>
</template>

<script>

</script>

<style scoped>
    #header {
        font-family: 'Montserrat', sans-serif;
    }

    p {
        @apply text-white
    }

    .form-input {
        @apply mb-5 w-full rounded-lg bg-white px-5 py-3
    }
</style>