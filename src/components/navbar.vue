<template>
    <nav class="navbarWrapper" :class="this.stickyNavbarClass">
        <div class="btn btn-one" @click="scrollToSection('datesSectionWrapper')" id="firstButton" :class="this.stickyNavbarClass">
            <span>CONCERTEN</span>
        </div>
        
        <div class="btn btn-one" @click="scrollToSection('aboutSectionWrapper')" :class="this.stickyNavbarClass">
            <span>OVER</span>
        </div>
        
        <img class="logoImage" @click="scrollToTop" src="../assets/Reyck_logo_goed-removebg-preview.png"/>
        
        <div class="btn btn-one" @click="scrollToSection('newsSectionWrapper')" :class="this.stickyNavbarClass">
            <span>NIEUWS</span>
        </div>

        <div class="btn btn-one" @click="scrollToSection('contactSectionWrapper')" :class="this.stickyNavbarClass">
            <span>CONTACT</span>
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
            const y = document.getElementById(percentage).getBoundingClientRect().top + window.scrollY - (0.20 * window.innerHeight);
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
    grid-template-columns: 1fr 15% 15% 12% 15% 15% 1fr;
    transition: all 0.2s linear;
    font-family: 'overlock';
}
.navbarWrapper.sticky {
    grid-template-columns: 20% 13% 13% 4% 13% 13% 20%;
}

.btn {
    font-size: 30px;
    width: 99%;
    text-align: center;
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
@media (max-width: 1300px) {
    .navbarWrapper {
        grid-template-columns: 1fr 14% 14% 12% 14% 14% 1fr;
    }

    .btn {
        font-size: 18px;
        height: 80%;
    }
    
    .logoImage {
        width: 80%;
    }
}

/* Responsiveness */
@media (max-width: 800px) {
    .navbarWrapper {
        grid-template-columns: 1fr 20% 20% 20% 20% 20% 1fr;
    }

    .btn {
        font-size: 18px;
        height: 50% !important;
    }
    
    .logoImage {
        width: 80%;
    }
    #firstButton {
        grid-column: 2;
    }
    .logoImage {
        grid-column: 4;
    }
}
@media (max-width: 600px) {
    .navbarWrapper {
        grid-template-columns: 1fr 20% 20% 20% 20% 20% 1fr;
    }
}
@media (max-width: 480px) {
    .navbarWrapper {
        grid-template-columns: 1fr 20% 20% 20% 20% 20% 1fr;
    }

    .btn {
        font-size: 10px;
    }

    .logoImage {
        width: 100%;
        margin-left: 0;
    }
}


@media (max-width: 360px) {
    .navbarWrapper {
        grid-template-columns: 1fr 20% 20% 20% 20% 20% 1fr;
    }

    .btn {
        font-size: 8px;
    }

    .logoImage {
        width: 100%;
        margin-left: 0;
    }
}
</style>