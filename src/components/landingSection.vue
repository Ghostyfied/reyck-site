<template>
    <div class="landingWrapper">
        <div class="imageWrapper">
            <img class="landingImage" src="../assets/buitenaards-release.png" />
            <a href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU" class="spotifyPresave scale-up" data-ae-follow-link="spotify" data-ae-album-id="2jUjrmnCfEEwvC4H2twuTI">
                <img src="../assets/spotify.svg" class="spotify-icon" alt="Spotify Logo" />
                Spotify presave
            </a>
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
/* Base styles */
.landingWrapper {
    grid-row: 1;
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: [first] 100%;
    grid-template-rows: [first] 15% [second] 70% [third] 15%;
    background: rgb(219,181,179);
}
.imageWrapper {
    overflow: hidden;
    grid-row: 1 / 4;
    grid-column: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.imageWrapper::before, .imageWrapper::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 10px; /* Adjust to the desired border thickness */
    background: rgb(219,181,179); /* Match the color of #landingSkewed */
    z-index: 3; /* To make sure the border stays above the image */
}

.imageWrapper::before {
    top: 0;
    background: 
        linear-gradient(to left, rgb(219,181,179) 44%, transparent 44%, transparent 60%, rgb(219,181,179) 60%),
        linear-gradient(to right, rgb(219,181,179) 44%, transparent 44%, transparent 60%, rgb(219,181,179) 60%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.imageWrapper::after {
    bottom: 0;
    background: rgb(219,181,179);
}

.landingImage {
    width: 100%;
    height: auto;
    z-index: 1;
    border-left: 10px double rgb(219,181,179); 
    border-right: 10px double rgb(219,181,179); 
    box-sizing: border-box;
}

a[data-ae-follow-link="spotify"] {
    position: absolute;
    z-index: 2;
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    transition: all 0.3s ease;
    transform: translateX(-30%) scale(1.5);
    background: #1DB954;
    border-radius: 20px;
    display: flex;
    align-items: center;

    flex-direction: row;
    white-space: nowrap;
    overflow: hidden;
    justify-content: center;
    width: auto;
    min-width: 150px;
}
a[data-ae-follow-link="spotify"]:hover {
    background: #1AA34A;
}
.spotify-icon {
    margin-right: 8px;
    width: auto;
    max-width: 20px;
    max-height: 20px;
}
#landingSkewed {
    grid-row: 3;
    align-self: end;
    z-index: 100;
}
@media (max-width: 1400px) {
a[data-ae-follow-link="spotify"] {
    transform: translateX(-20%) scale(1);
}
}

/* For tablet screens */
@media (max-width: 800px) {
a[data-ae-follow-link="spotify"] {
    transform: translateX(-10%) scale(0.7);
}
}

/* For mobile screens */
@media (max-width: 480px) {
    .landingImage {
        border-left: 5px double rgb(219,181,179);
        border-right: 5px double rgb(219,181,179);
    }
    a[data-ae-follow-link="spotify"] {
        transform: translateX(-5%) scale(0.5);
    }

    .imageWrapper::before, .imageWrapper::after {
        height: 5px;
    }

    a[data-ae-follow-link="spotify"] {
        padding: 3px 7px;
        font-size: 12px; /* Optional: if the text appears too big on mobile */
    }
}
</style>
