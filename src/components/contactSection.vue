<template>
    <div id="contactSectionWrapper">
        <h1 class="sectionTitle">Contact</h1>
        <div id="textWrapper">
            Contact opnemen? Dat kan door ons te mailen via deze link:
            <a href="mailto:Reyckband@hotmail.com">Mail</a><br><br>
            Of geef ons een belletje op het volgende nummer:
            +31 6 39690206
        </div>
    </div>
    <skewedC color1="rgb(219,96,87)" color2="rgb(219,66,55)" orientation="counterClockwise"/>
</template>

<script>

export default {
    name: "contactSection",
}
</script>

<style scoped>
#contactSectionWrapper {
    font-family: 'enriqueta';
    min-height: 500px;
    grid-column: 1 / 3;
    display: grid;
    background: rgb(219,96,87);
    color: #fff;
    grid-template-columns: [first] 10% [second] 30% [third] 50% [fourth] 10%;
    grid-template-rows: 10% 90%;
}
#textWrapper {
    width: 80%;
    place-self: center;
    font-weight: 700;
    grid-column: 2 / 4;
    font-size: large;
}
.sectionTitle {
    grid-column: 2;
    place-self: start center;
    font-size: 40px;
    font-family: 'overlock';
}

</style>
