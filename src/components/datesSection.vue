<template>
    <div id="datesSectionWrapper">
        <h1 class="sectionTitle">Concert dates</h1>
        <div class="tableWrapper">
            <div v-for="concert in this.concertArray" class="tableRow">
                <span class="title">{{ concert[0] }}</span>
                <span class="datum border_right">{{ concert[1] }}</span>
                <span class="stad border_right">{{ concert[2] }}</span>
                <span class="locatie border_right">{{ concert[3] }}</span>

                <!-- <a class="buttonRef" > -->
                <div class="btn btn-one ticketButton" v-if="concert[4]" @click="navigateToLink(concert[4])">
                    <span id="ticketButtonText">Meer info</span>
                </div>
                <!-- </a> -->
                <div v-else class="btn btn-one ticketButton off">
                    <span id="ticketButtonText">Meer info</span>
                </div>
            </div>
        </div>
    </div>
    <skewedC color1="rgb(219,181,179)" color2="rgb(219,160,157)" orientation="clockwise"/>
</template>

<script>
export default {
    name: "dateSection",
    data() {
        return {
            concertArray: [
                ["Uitloopconcert Deus", "18 april 2023", "Utrecht", "Tivoli Vredenburg", "https://www.tivolivredenburg.nl/agenda/deus-17-04-2023"],
                ["Finale Parel van de Betuwe", "21 april 2023", "Culemborg", "De Gelderlandfabriek", "https://www.degelderlandfabriek.nl/agenda/archief/finale-parel-van-de-betuwe/"],
                ["Bevrijdingsfestival", "6 mei 2023", "Geldermalsen", "De Beurs Schenkerij", ""],
                ["Trek Maastricht", "20 mei 2023", "Maastricht", "Stadspark Maastricht", "https://www.festival-trek.nl/"],
                ["Trek Utrecht", "27 mei 2023", "Utrecht", "Griftpark", "https://www.festival-trek.nl/"],
                ["Amsterdam Dormsession", "11 juni 2023", "Amsterdam", "Verbroederij", ""],
                ["Reyck & Suite Paranoia", "12 juni 2023", "Nijmegen", "Cafe Ergens", ""],
                ["Recyk & Suite Paranoia", "13 juni 2023", "Nijmegen", "Het Paleis", ""],
                ["Trek Den Haag", "9 september 2023", "Den Haag", "Westbroekpark", ""],
            ],
        }
    },
    methods: {
        navigateToLink(link) {
            window.open(link, "_blank");
        }
    },
}
</script>

<style scoped>
#datesSectionWrapper {
    width: 100%;
    min-height: 700px;
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: [first] 45% [second] 55%;
    background: rgb(219,181,179);
    font-family: 'enriqueta', 'sans-serif';
}
.tableWrapper {
    overflow: hidden;
    width: 80%;
    place-self: center;
    border-collapse: collapse;
    margin-top: 80px;
    margin-bottom: 80px;
    grid-column: 1 / 3;
}
.tableRow {
    font-size: large;
    margin-bottom: 3%;
    border-bottom: solid thin rgb(255, 242, 242);
    display: grid;
    grid-template-columns: repeat(5, 20%);
    font-size: 20px;
}
.tableRow span {
    place-self: center;
    color: rgb(255, 242, 242);
}
.title {
    grid-column: 1;
}
#ticketButtonText {
    color: #ffffff;
    z-index: 99;
    font-family: 'overlockItalic';
}
.border_right {
    border-left: solid thin rgb(255, 242, 242);
    width: 100%;
    text-align: center;
}
.sectionTitle {
    grid-column: 2;
    place-self: start center;
    font-size: 40px;
    font-family: 'overlock';
    color: rgb(255, 255, 255);
}
.ticketButton {
    font-size: 25px;
}
.ticketButton.off {
    background: rgb(100, 90, 90);
    color: rgb(100, 90, 90);
    border: solid thin rgb(219,181,179);
}
.buttonRef {
    color: rgb(255, 255, 255);
}
</style>
