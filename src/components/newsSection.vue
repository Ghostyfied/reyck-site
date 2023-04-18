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
    grid-column: 1 / 3;
    display: grid;
    background: rgb(219,125,119);
    color: #fff;
    grid-template-columns: [first] 10% [second] 35% [third] 45% [fourth] 10%;
    grid-template-rows: [first] 10% [second] 90%;
    font-family: 'enriqueta';
}
.instaWidget {
    width: 100%;
    place-self: center;
    grid-column: 2 / 4;
}
.sectionTitle {
    grid-column: 3;
    place-self: start center;
    font-size: 40px;
    font-family: 'overlock';
    color: 
}
</style>
