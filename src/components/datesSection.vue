<template>
    <div class="datesSectionWrapper">
        <div class="tableWrapper">
            <div v-for="concert in this.concertArray" class="tableRow">
                <span class="datum">{{ concert[0] }}</span>
                <span class="stad">{{ concert[1] }}</span>
                <span class="locatie">{{ concert[2] }}</span>

                <!-- <div v-if="concert[3] != 'UITVERKOCHT'" class="btn btn-one"> -->
                <div class="btn btn-one">
                    <a id="ticketButton">Tickets</a>
                </div>
                <!-- <div v-else disabled class="btn btn-one">
                    <a id="ticketButton">UITVERKOCHT</a>
                </div> -->
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
            // KOEN, kopier de volgende regel volledig (alles na de "//"):
            // ["22 april 2023", "antwerpen", "De Draak", "UITVERKOCHT" of "https://ticket.link.com"],
            concertArray: [
                ["12 maart 2023", "Antwerpen", "De Draak", "google.com"],
                ["13 maart 2023", "Brussel", "De Visser", "UITVERKOCHT"],
            ],
        }
    }
}
</script>

<style scoped>
.datesSectionWrapper {
    width: 100%;
    min-height: 400px;
    grid-column: 1 / 3;
    display: grid;
    background: rgb(219,181,179);
}
.tableWrapper {
    overflow: hidden;
    width: 80%;
    place-self: center;
    border-collapse: collapse;
}
.tableRow {
    font-family: 'Josefin Sans', sans-serif;
    font-size: large;
    margin-bottom: 3%;
    border-bottom: solid thin rgb(255, 242, 242);
    display: grid;
    grid-template-columns: repeat(4, 25%);
}
.tableRow span {
    place-self: center;
    font-weight: 700;
    color: rgb(255, 242, 242);
}
.datum {
    grid-column: 1;
}
#ticketButton {
    font-weight: 700;
    color: #ffffff;
    z-index: 99;
}
</style>
