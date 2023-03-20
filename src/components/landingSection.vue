<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,600&display=swap" rel="stylesheet">

    <div class="landingWrapper">
        <nav class="navbarWrapper">
            <div class="btn btn-one" id="firstButton">
                <span>Concerts</span>
            </div>
            
            <div class="btn btn-one">
                <span>About</span>
            </div>
            
            <img class="logoImage" src="../assets/Reyck_logo_goed-removebg-preview.png"/>
            
            <div class="btn btn-one">
                <span>News</span>
            </div>

            <div class="btn btn-one">
                <span>Contact</span>
            </div>
        </nav>
        <div class="imageWrapper">
            <img class="landingImage" src="../assets/groupfoto16-9.jpg" />
        </div>
        <skewedC id="landingSkewed" color1="rgba(255,255,255,0)" color2="rgb(219,181,179)" orientation="counterClockwise"/>
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
    grid-template-rows: [first] 15% [second] 85%;
}
.imageWrapper {
    overflow: hidden;
    grid-row: 1 / 3;
    grid-column: 1;
}
.landingImage {
    width: 100%;
    height: auto;
}

.logoImage {
    grid-column: 4;
    z-index: 10;
    justify-self: center;
    align-self: center;
    width: 90%;
    height: auto;
    margin-left: 7%;

    /* logo colours
    bar 1: rgb(219,181,179)
    bar 2: rgb(219,160,157)
    bar 3: rgb(219,125,119)
    bar 4: rgb(219,96,87)
    bar 5: rgb(219,66,55) */
}
.navbarWrapper {
    position: sticky;
    top: 0;
    align-self: center;
    align-items: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    z-index: 10;
    display: grid;
    grid-template-columns: [first] 10% [second] 17% [third] 17% [fourth] 12% [fifth] 17% [sixth] 17% [seventh] 10%;
}
.navbarWrapper .btn {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    line-height: 55px;
    width: 99%;
}
#firstButton {
    grid-column: 2/3;
}
#landingSkewed {
    grid-row: 2;
    align-self: end;
}
</style>
