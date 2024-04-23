<template>
    <div class="landingWrapper">
        <div class="imageWrapper">
            <img class="landingImage" src="../assets/reyck_header.webp" />
            <!-- <div class="spotify">
                <button class="button-49" @click="redirectToLink">Tickets</button>
            </div> -->
        </div>
        <skewedC id="landingSkewed" color1="rgba(255,255,255,0)" color2="rgb(219,181,179)" orientation="counterClockwise"/>
    </div>
</template>

<script>
export default {
    name: "landingSection",
    methods: {
        redirectToLink() {
            const externalLink = "https://www.bitterzoet.com/event/plan-ep-release/";
            window.location.href = externalLink;
        }
    }
}
</script>

<style scoped>
/* Base styles */
.landingWrapper {
    grid-row: 1;
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: [first] 100%;
    grid-template-rows: [first] 15% [second] 70% [third] 15%;
    background: rgb(219,181,179);
}
.imageWrapper {
    overflow: hidden;
    grid-row: 1 / 4;
    grid-column: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.imageWrapper::before, .imageWrapper::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 10px; /* Adjust to the desired border thickness */
    background: rgb(219,181,179); /* Match the color of #landingSkewed */
    z-index: 3; /* To make sure the border stays above the image */
}

.imageWrapper::before {
    top: 0;
    background: 
        linear-gradient(to left, rgb(219,181,179) 44%, transparent 44%, transparent 60%, rgb(219,181,179) 60%),
        linear-gradient(to right, rgb(219,181,179) 44%, transparent 44%, transparent 60%, rgb(219,181,179) 60%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.imageWrapper::after {
    bottom: 0;
    background: rgb(219,181,179);
}

.landingImage {
    width: 100%;
    height: auto;
    z-index: 1;
    border-left: 10px double rgb(219,181,179); 
    border-right: 10px double rgb(219,181,179); 
    box-sizing: border-box;
}

.spotify {
    position: absolute;
    z-index: 2;
    text-decoration: none;
    padding: 5px 10px;
    transform: translate(-16%) scale(1.5); 
    flex-direction: row;
    white-space: nowrap;
    overflow: hidden;
    justify-content: center;
    width: auto;
    min-width: 150px;
    cursor: pointer;
}
.spotify-icon {
    margin-right: 8px;
    width: auto;
    max-width: 20px;
    max-height: 20px;
}


#landingSkewed {
    grid-row: 3;
    align-self: end;
    z-index: 100;
}
@media (max-width: 1400px) {
a[data-ae-follow-link="spotify"] {
    transform: translate(-12%) scale(1);
}
}

/* For tablet screens */
@media (max-width: 900px) {
a[data-ae-follow-link="spotify"] {
    transform: translate(-9%) scale(0.6);
}
}

/* For mobile screens */
@media (max-width: 480px) {
    .landingImage {
        border-left: 5px double rgb(219,181,179);
        border-right: 5px double rgb(219,181,179);
    }
    a[data-ae-follow-link="spotify"] {
        transform: translate(-7%) scale(0.4);
    }

    .imageWrapper::before, .imageWrapper::after {
        height: 5px;
    }

    a[data-ae-follow-link="spotify"] {
        padding: 3px 7px;
        font-size: 12px; /* Optional: if the text appears too big on mobile */
    }
}

/* CSS */
.button-49,
.button-49:after {
    cursor: pointer;
  width: 150px;
  height: 76px;
  line-height: 78px;
  font-size: 20px;
  font-family: 'Bebas Neue', sans-serif;
  background: linear-gradient(45deg, transparent 5%, #d47d78 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px #d7b5b3;
  outline: transparent;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-49:after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  
  content: 'BITTERZOET';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: #ff7b00;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, rgb(219,160,157) 3%, rgb(208, 100, 95) 5%, rgb(219,96,87) 5%);
  text-shadow: -3px -3px 0px #d60a0a, 3px 3px 0px #8f2222b0;
  clip-path: var(--slice-0);
}

.button-49:hover:after {
  animation: 1.5s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}

@media (min-width: 768px) {
  .button-49,
  .button-49:after {
    width: 200px;
    height: 86px;
    line-height: 88px;
  }
}
</style>
