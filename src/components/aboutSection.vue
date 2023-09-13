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
    background: rgb(219,160,157);
    color: #fff;
    display: grid;
    grid-template-columns: 10% 30% 50% 10%;
    grid-template-rows: 10% 80% 10%;
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
    width: 60%;  /* Reduced from 70% to 60% */
    grid-column: 2;
    place-self: center center;
}

.sectionTitle {
    grid-column: 2;
    place-self: center center;
    font-size: 40px;
    font-family: 'overlock';
}

/* Responsiveness */
@media (max-width: 800px) {
    #aboutSectionWrapper {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto; /* You may set explicit row heights if needed */
        text-align: center;
    }

    .sectionTitle {
        grid-column: 1;
        grid-row: 1;
        font-size: 30px;
        margin-top: 5%;
        width: 90%;
        margin-bottom: 5%;
    }

    .spotifyWidget {
        grid-column: 1;
        grid-row: 2; /* Explicitly set to row 2 */
        width: 50%;  /* Adjusted for smaller screens */
        margin-bottom: 5%;
    }

    #textWrapper {
        grid-column: 1;
        grid-row: 3; /* Explicitly set to row 3 */
        font-size: 18px;
        width: 65%;
        margin-bottom: 5%;
    }
}

@media (max-width: 480px) {
    .sectionTitle {
        font-size: 24px;
    }

    #textWrapper {
        font-size: 16px;
        width: 70%;
    }
}
</style>