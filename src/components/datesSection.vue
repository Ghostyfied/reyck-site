<template>
    <div class="datesSectionWrapper">
        <div class="tableWrapper">
            <div v-for="concert in this.concertArray" class="tableRow">
                <div class="datum">{{ concert[0] }}</div>
                <div class="stad">{{ concert[1] }}</div>
                <div class="locatie">{{ concert[2] }}</div>

                <div v-if="concert[3] != 'UITVERKOCHT'" class="Tickets">
                    <a>Tickets</a>
                </div>
                <div v-else class="Tickets">
                    <span>UITVERKOCHT</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "dateSection",
    data() {
        return {
// KOEN, kopier de volgende regel volledig (alles na de "//"):
// [datum => "22 april 2023", stad => "antwerpen", locatie => "De Draak", ticketLink => "UITVERKOCHT" of "https://ticket.link.com"], 
            concertArray: [
                ["22 april 2023", "Antwerpen", "De Draak", "google.com"],
                ["23 april 2023", "Brussel", "De Visser", "UITVERKOCHT"],
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
}
.tableWrapper {
    overflow: hidden;
    width: 80%;
    place-self: center;
    border-collapse: collapse;
}
.tableRow {
    font-size: large;
    margin-bottom: 3%;
    border-bottom: solid thin;
    display: grid;
    grid-template-columns: repeat(4, 25%);
}
.datum {
    grid-column:1/2;   
}
</style>
