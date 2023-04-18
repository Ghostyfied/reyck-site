<template>
    <div id="contactSectionWrapper">
        <div id="textWrapper">
            Contact opnemen? Dat kan door ons te mailen via deze link:
            <a href="mailto:Reyckband@hotmail.com">Mail</a>
            of geef ons een belletje op het volgende nummer:
            <br>+31 6 39690206
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
    min-height: 700px;
    grid-column: 1 / 3;
    display: grid;
    background: rgb(219,96,87);
    color: #fff;
    grid-template-columns: [first] 10% [second] 30% [third] 50% [fourth] 10%;
}
#textWrapper {
    width: 80%;
    place-self: center;
    font-weight: 700;
    grid-column: 2;
    font-size: large;
}

</style>
