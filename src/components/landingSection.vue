<template>
    <div class="landingWrapper">
        <nav class="navbarWrapper">
            <div class="btn btn-one">
                <span>HOME</span>
            </div>
            
            <div class="btn btn-one">
                <span>ABOUT</span>
            </div>
            
            <div class="btn btn-one">
                <span>DATES</span>
            </div>

            <div class="btn btn-one">
                <span>CONTACT</span>
            </div>
        </nav>
        <img class="logoImage" src="../assets/testLogo3-removebg-preview.png"/>
        <div class="imageWrapper">
            <!-- <img class="landingImage" src="../assets/testResolutionImage.jpg" /> -->
            <img class="landingImage" src="../assets/groupfoto16-9.jpg" />
        </div>
    </div>
</template>

<script>
export default {
    name: "landingSection",
}
</script>

<style scoped>
.landingWrapper {
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: [first] 100%;
    grid-template-rows: [first] 10% [second];
}
.imageWrapper {
    overflow: hidden;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
}
.landingImage {
    width: 100%;
    height: auto;
}

.logoImage {
    grid-row: 1/3;
    grid-column: 1/3;
    z-index: 10;
    justify-self: center;
    align-self: center;
    width: 25%;
    height: auto;
}
.navbarWrapper {
    position: sticky;
    top: 0;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(4, 25%);
}
</style>
