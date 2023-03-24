<template>
    <nav class="navbarWrapper" :class="this.stickyNavbarClass">
        <div class="btn btn-one" @click="scrollToSection('datesSectionWrapper')" id="firstButton" :class="this.stickyNavbarClass">
            <span>Concerts</span>
        </div>
        
        <div class="btn btn-one" @click="scrollToSection('aboutSectionWrapper')" :class="this.stickyNavbarClass">
            <span>About</span>
        </div>
        
        <img class="logoImage" @click="scrollToTop" src="../assets/Reyck_logo_goed-removebg-preview.png"/>
        
        <div class="btn btn-one" @click="scrollToSection('newsSectionWrapper')" :class="this.stickyNavbarClass">
            <span>News</span>
        </div>

        <div class="btn btn-one" @click="scrollToSection('contactSectionWrapper')" :class="this.stickyNavbarClass">
            <span>Contact</span>
        </div>
    </nav>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

export default {
    name: "navbarSection",
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data() {
    return {
            stickyNavbarClass: "",
        };
    },
    methods: {
        scrollToSection(percentage) {
            const y = document.getElementById(percentage).getBoundingClientRect().top + window.scrollY - (0.10 * window.innerHeight);
            window.scroll({
                top: y,
                behavior: 'smooth'
            });
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        handleScroll (event) {
            if (window.scrollY > (0.7 * window.innerHeight)) {
                this.stickyNavbarClass = "sticky";
            } else if (window.scrollY < 950) {
                this.stickyNavbarClass = "";
            }
        }
    }
}
</script>

<style>
.navbarWrapper {
    position: sticky;
    top: 0;
    align-self: start;
    align-items: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    z-index: 10;
    display: grid;
    grid-template-columns: [first] 10% [second] 17% [third] 17% [fourth] 12% [fifth] 17% [sixth] 17% [seventh] 10%;
    transition: all 0.2s linear;
}
.navbarWrapper.sticky {
    /* align-items: start; */
    grid-template-columns: [first] 20% [second] 13% [third] 13% [fourth] 4% [fifth] 13% [sixth] 13% [seventh] 20%;
}
.btn {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    line-height: 55px;
    width: 99%;
}
.logoImage {
    grid-column: 4;
    z-index: 10;
    justify-self: center;
    align-self: center;
    width: 90%;
    height: auto;
    margin-left: 7%;
    cursor: pointer;
}
#firstButton {
    grid-column: 2/3;
}
</style>