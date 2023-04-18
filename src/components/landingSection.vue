<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,600&display=swap" rel="stylesheet">


    <div class="landingWrapper">
        <div class="imageWrapper">
            <img class="landingImage" src="../assets/groupfoto16-9.webp" />
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
    grid-row: 1;
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: [first] 100%;
    grid-template-rows: [first] 15% [second] 85%;
    background: rgb(219,181,179);
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
#landingSkewed {
    grid-row: 2;
    align-self: end;
}
</style>
