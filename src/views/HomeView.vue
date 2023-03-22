<script setup>
  import landingSection from "../components/landingSection.vue"
  import datesSection from "../components/datesSection.vue";
  import aboutSection from "../components/aboutSection.vue";
  import contactSection from "../components/contactSection.vue";
  import newsSection from "../components/newsSection.vue";
  import navbarSection from "../components/navbar.vue";
  import socialMediaSection from "../components/mediaButtons.vue";
</script>

<template>
  <div class="bodyWrapper">
    <socialMediaSection />
    <navbarSection />
    <landingSection />
    <datesSection />
    <aboutSection />
    <newsSection />
    <contactSection />
  </div>
</template>

<style>
.bodyWrapper {
  display: grid;
  grid-template-columns: 100%;
}
</style>