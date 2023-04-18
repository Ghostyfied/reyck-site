<template>
    <div id="aboutSectionWrapper">
        <h1 class="sectionTitle">Over REYCK</h1>
        <div class="spotifyWidget">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/36t2vlP5OiRO1G7EgxgNvU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div id="textWrapper">
            <span>De visie van vier studenten op het leven, omgebouwd tot een megastrakke glijbaan van
                    Britpop, Nederpop en Rock ‘n Roll; dat is REYCK. Iedereen mag meezingen, niemand
                    mag stilstaan en het feest kan losbarsten!<br>
                    Met een mix van sexy grooves, heerlijke beats en ronduit vunzige baslijntjes krijgt
                    REYCK alle voetjes van de vloer. Toch zijn de heren niet bang om af en toe een
                    zoetsappige hartenbreker uit de kast te trekken, zoals live-exclusive Anne-Fleur.<br>
                    Dus maak je borst maar nat, schud je nog even lekker los en vraag de barman om een
                    biertje, want REYCK is coming to town, en ze gaan pas naar huis als het dak eraf is!</span>    
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
#aboutSectionWrapper {
    min-height: 700px;
    grid-column: 1 / 3;
    background: rgb(219,160,157);
    color: #fff;
    display: grid;
    grid-template-columns: [first] 10% [second] 30% [third] 50% [fourth] 10%;
    grid-template-rows: [first] 10% [second] 90%;
    font-family: 'overlock';
}
#textWrapper {
    font-weight: 700;
    font-size: 20px;
    width: 80%;
    place-self: center;
    grid-column: 3;
}
.spotifyWidget {
    width: 70%;
    grid-column: 2;
    place-self: center;
}
.sectionTitle {
    grid-column: 2;
    place-self: start center;
    font-size: 40px;
    font-family: 'overlock';
}

</style>
