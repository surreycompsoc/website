<template>
  <div>
    <header id="appHeader" :class="{ expanded }">
      <!-- Presentation elements (only expanded) -->
      <div class="presentation" role="presentation">
        <div class="headerBackdrop" role="presentation" />
        <transition name="fade">
          <img v-if="expanded" class="headerBackdropLogo" src="~/assets/images/stag-transparent.png" alt="" role='presentation' draggable='false' />
        </transition>
      </div>

      <!-- Root navigational elements -->
      <nav>
        <a href="/">
          <img class="logo" role="presentation" draggable="false" src="~/assets/images/logo_grouped 2023.png" alt="Surrey CompSoc logo">
        </a>
        <div class="links">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/committee">Committee</nuxt-link>
          <nuxt-link to="/events">Events</nuxt-link>
        </div>
      </nav>

<!--       Header text elements (only expanded)-->
      <transition name="fade">
        <div v-if="expanded" class="header-text">
          <h2>Welcome to Surrey CompSoc!</h2>
          <p>
            We&lsquo;re the University of Surrey’s official Computer Science society.<br>
            We organize and host academic, professional and social events.
          </p>
        </div>
      </transition>
    </header>
    <div class="header-spacer" />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang='scss'>
$headerHeight: 90px;
$expandedHeaderHeight: 400px;
$arrowStart: 85%;
$headerTransition: .2s ease-out;

header#appHeader {
  z-index: 99999;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  height: $expandedHeaderHeight;
  transition: height $headerTransition, background $headerTransition;

  &:not(.expanded) {
    height: $headerHeight;
    background: linear-gradient(27.73deg, #8572D6 29.47%, #27D7A9 100%);
  }

  .presentation {
    pointer-events: none;
    user-select: none !important;

    .headerBackdrop {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;

      width: 100vw;
      height: $expandedHeaderHeight;
      z-index: -1;
      background: linear-gradient(27.73deg, #8572D6 29.47%, #27D7A9 100%);
      transition: height $headerTransition;
      clip-path: polygon(0 0, 100% 0, 100% $arrowStart, 50% 100%, 50% 100%, 0 $arrowStart);
    }

    .headerBackdropLogo {
      position: absolute;
      pointer-events: none;
      max-width: 285px;
      max-height: 80%;
      left: 0;
      right: 0;
      bottom: 20px;
      margin: 0 auto;
    }
  }
  &:not(.expanded) .headerBackdrop {
    height: $headerHeight;
    opacity: 0;
  }

  nav {
    width: 100%;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .logo {
      display: block;
      height: 50px;
      user-select: none !important;
    }

    .links {
      display: flex;
      gap: 0 40px;
      font-weight: bold;
      color: white;
      user-select: none !important;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 1;
        width: 100%;
        text-align: center;
        align-content: center;
        gap: 10px 10px;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      a {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          display: inline-block;
          height: 2px;
          width: 0;
          background: white;
          border-radius: 100px;
          transition: width $headerTransition;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }


  .header-text {
    position: absolute;
    left: 0;
    right: 0;
    top: $headerHeight;
    height: #{math.round(math.div($arrowStart, 100%) * ($expandedHeaderHeight)) - $headerHeight};

    padding: 0 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: white;
      text-align: center;
    }

    p {
      font-weight: bold;
      color: white;
      text-align: center;
    }
  }
}

#appHeader + .header-spacer {
  display: block;
  height: $headerHeight;
  transition: height $headerTransition;
}

#appHeader.expanded + .header-spacer {
  height: $expandedHeaderHeight;
}
</style>
