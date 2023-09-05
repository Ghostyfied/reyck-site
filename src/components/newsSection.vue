<template>
    <div id="newsSectionWrapper">
        <h1 class="sectionTitle">Laatste updates</h1>
        <div class="electricblaze-id-2Uhx8h1 instaWidget"></div>
    </div>
    <skewedC color1="rgb(219,125,119)" color2="rgb(219,96,87)" orientation="clockwise"/>
</template>

<script>
export default {
    name: "newsSection",
    async mounted() {
        await this.loadExternalScript('https://s.electricblaze.com/widget.js');
    },
    methods: {
        loadExternalScript(src) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.defer = true;
                script.onload = () => resolve(script);
                script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
                document.head.appendChild(script);
            });
        },
    },
}
</script>

<style scoped>
#newsSectionWrapper {
    min-height: 700px;
    background: rgb(219,125,119);
    color: #fff;
    display: grid;
    grid-template-columns: 10% 35% 45% 10%;
    grid-gap: 40px; /* Providing gap between rows for a more spaced look */
    font-family: 'enriqueta';
}

.instaWidget {
    width: 100%;
    place-self: center;
    grid-column: 2 / 4;
    margin: 50px 0; /* Providing consistent space around the widget */
}

.sectionTitle {
    grid-column: 3;
    place-self: start center;
    font-size: 40px;
    font-family: 'overlock';
}

/* Responsiveness */
@media (max-width: 768px) {
    #newsSectionWrapper {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .instaWidget {
        grid-column: 1;
        width: 90%;
    }

    .sectionTitle {
        grid-column: 1;
        font-size: 30px;
    }
}

@media (max-width: 480px) {
    .sectionTitle {
        font-size: 24px;
    }

    .instaWidget {
        width: 80%;
    }
}
</style>