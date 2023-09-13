<template>
    <div id="contactSectionWrapper">
        <h1 class="sectionTitle">Contact</h1>
        <div id="textWrapper">
            Contact opnemen? Dat kan door ons te mailen via deze link:
            <a href="mailto:Reyckband@hotmail.com" class="contactLink">Mail</a><br><br>
            Of geef ons een belletje op het volgende nummer:
            <span class="contactNumber">+31 6 39690206</span>
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
    background: rgb(219,96,87);
    color: #fff;
    display: grid;
    grid-template-columns: 10% 30% 50% 10%;
    grid-template-rows: 10% 80% 10%;
}

#textWrapper {
    width: 80%;
    place-self: center;
    font-weight: 700;
    grid-column: 2 / 4;
    font-size: 18px;
}

.sectionTitle {
    grid-column: 2;
    place-self: center center;
    font-size: 40px;
    font-family: 'overlock';
}

.contactLink, .contactNumber {
    color: #fff;
    text-decoration: underline;
    font-weight: bold;
    font-size: 20px;
}

/* Responsiveness */
@media (max-width: 800px) {
    #contactSectionWrapper {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .sectionTitle {
        grid-column: 1;
        width: 90%;
        font-size: 30px;
        margin-top: 5%;
    }

    #textWrapper {
        grid-column: 1;
        width: 90%;
    }
}

@media (max-width: 480px) {
    .sectionTitle {
        font-size: 24px;
    }

    #textWrapper {
        width: 80%;
    }
}
</style>