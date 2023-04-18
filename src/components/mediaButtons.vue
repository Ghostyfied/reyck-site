<template>
    <div class="mediaButtons">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <a href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU" target="_blank" class="fa fa-spotify"></a>
        <a href="https://www.instagram.com/reyckband" target="_blank" class="fa fa-instagram"></a>
        <a href="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw" target="_blank" class="fa fa-youtube"></a>
        <a href="https://www.facebook.com/REYCKBAND/" target="_blank" class="fa fa-facebook"></a>
    </div>
</template>

<script>
export default {
    name: "socialMediaSection",
}
</script>

<style>
.mediaButtons {
    z-index: 99;
    margin-right: 30px;
    margin-bottom: 30px;
    position: fixed;
    bottom: 0;
    right: 0;
    display: grid;
    /* grid-template-columns: 1;
    grid-template-rows: 4; */
}
.fa {
    padding: 15px;
    text-decoration: none;
    margin: 5px 2px;
    border-radius: 50%;
}
.fa:hover {
    opacity: 0.7;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}.fa-youtube {
  background: #bb0000;
  color: white;
}.fa-instagram {
  background: #125688;
  color: white;
}.fa-spotify {
  background: #1b7409;
  color: white;
}

</style>