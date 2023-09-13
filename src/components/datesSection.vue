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
                    <div class="btn btn-one ticketButton" v-if="concert[4]" @click="navigateToLink(concert[4], $event)">
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
                ["Bergen Live", "2 Sep. 2023", "Bergen", "Bergen Live", "https://bergenlive.nl/talent-on-stage/#1691919329801-f14f9b2d-e176"],
                ["Trek Den Haag", "9 Sep. 2023", "Den Haag", "Westbroekpark", "https://www.festival-trek.nl/"],
                ["Ekko on stage", "16 Sep. 2023", "Utrecht", "Ekko", "https://ekko.nl/event/ekko-on-stage/"],
                ["Café Stathe", "28 Sep. 2023", "Utrecht", "Café stathe", "https://www.stathe.nl/"],
                ["'Buitenaards' release party", "26 Okt. 2023", "Utrecht", "Café Hofman", "https://hofman-utrecht.nl/"],
                ["'Vanavond gaat ze dansen' release party", "15 Dec. 2023", "Den Haag", "Paardcafé", "https://www.paard.nl/paardcafe/"],
                ["Ep release party", "15 Maart 2023", "Amsterdam", "Bitterzoet", "https://www.bitterzoet.com/"],
            ],
        }
    },
    methods: {
    navigateToLink(link, event) {
        window.open(link, "_blank");

        if (event && event.target) {
            event.target.blur();
        }
    }
}
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
    margin-top: 4%;
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
    text-align: center;
    color: rgb(255, 242, 242);
}
.title {
    grid-column: 1;
    font-size: 22px;  /* Adjust to your preferred size */
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

/* Responsiveness */
@media (max-width: 800px) {
    .tableRow {
        border-bottom: none thin rgb(255, 242, 242);
    }
    .tableWrapper {
        width: 95%;
    }

    .tableRow {
        grid-template-columns: 2fr;
        font-size: 16px;
    }

    .title, .datum, .stad, .locatie {
        text-align: left;
        margin: 10px 0;
    }

    .border_right {
        border-left: none;
        border-bottom: solid thin rgb(255, 242, 242);
    }

    .ticketButton {
        font-size: 18px;
        margin: 10px 0;
    }
    
    .sectionTitle {
        font-size: 30px;
        grid-column: 1/3;
        margin-top: 5%;
    }

    .tableRow:not(:last-child) {
        margin-bottom: 40px; /* or whatever value you prefer */
    }
}

@media (max-width: 480px) {

    .sectionTitle {
        grid-column: 1/3;
        font-size: 26px;
    }

    .tableRow {
        font-size: 14px;
    }

    .ticketButton {
        font-size: 16px;
    }
}
</style>
