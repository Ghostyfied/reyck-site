<template>
    <div class="skewedCC" :style="cssProps"></div>
</template>

<script>
export default {
    name: "skewedC",
    props: {
        color1: String,
        color2: String,
        orientation: String,
    },
    data() {
        return {
            orientationCalculated: this.orientation == "clockwise" ? "left" : "right",
        }
    },
    computed: {
        cssProps() {
            return {
                'background'    : 'linear-gradient(to '
                + this.orientationCalculated
                + ' bottom, '
                + this.color1 + ' 49.5%, '
                + this.color2 + ' 50%)',
            }
        }
    }
}
</script>