<template>
    <div class="aboutWrapper">
        <div class="spotifyWidget">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/36t2vlP5OiRO1G7EgxgNvU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div id="textWrapper">
            <span>Wij zijn Reyck, een jonge Nederlandstalige pop band. Met scheurende gitaren, catchy hooks, beukende drums en dansbare bas vertalen we onze belevingswereld naar muziek. Geïnspireerd door de Brit-pop scene, de dansvloer en flirtend met elektro-pop willen we Nederland meenemen in onze energie en ideeën over wat live muziek kan zijn. Bestaande uit zanger Twan de Kock, gitarist Wessel van Rooijen, Koen Roza op drums en bassist Elmo Wanders.</span>
        </div>
    </div>
    <skewedC color1="rgb(219,160,157)" color2="rgb(219,125,119)" orientation="counterClockwise"/>
</template>

<script>

export default {
    name: "aboutSection",
}
</script>

<style scoped>
.aboutWrapper {
    min-height: 400px;
    grid-column: 1 / 3;
    display: grid;
    background: rgb(219,160,157);
    color: #fff;
    grid-template-columns: [first] 10% [second] 30% [third] 50% [fourth] 10%;
}
#textWrapper {
    font-weight: 700;
    font-size: large;
    font-family: 'Josefin Sans', sans-serif;
    width: 80%;
    place-self: center;
    grid-column: 3;
}
.spotifyWidget {
    width: 70%;
    grid-column: 2;
    place-self: center;
}

</style>
