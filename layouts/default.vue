<template>
    <!-- Header -->
    <div>
        <div class="flex flex-row">
            <div class="mx-10 mr-20">
                <img src="../assets/images/LogoGold.png" alt="logo">
            </div>            
            <div class="">
                <a href="#home">Home</a>
                <a href="#programs">Programs</a>
                <a href="#testimonials">Testimonials</a>
                <a href="contact">Contact Us</a>
            </div>
        </div>
    </div>

    <!-- Body -->
    <div>
        <slot/>
    </div>

    <!-- Footer -->
    <div>
        <p>footer</p>
    </div>
</template>