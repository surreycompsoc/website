<template>
  <div id="root">
    <a href="https://discord.gg/BypMWcnuY7" target="_blank">
      <div class="discordOverlay">
          <img src="https://img.icons8.com/ios-filled/1000/000000/discord.png" />
      </div>
    </a>


    <Header :expanded='useExpandedHeader' />
    <Nuxt />
    <Footer />
  </div>
</template>


<style lang="scss">
.discordOverlay {
  box-shadow: 2px 2px 5px;
  background-color: #7289da;
  padding: 10px;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  margin: 20px;
  object-fit: contain;
  object-position: bottom;

  position: fixed;
  display: inline-block;
  bottom: 0;
  right: 0;

  z-index: 999999;

  img {
    pointer-events: none !important;
    filter: unquote("invert()");
    display: inline-block;
  }
}

.discordOverlay:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.3579s;
}
</style>

<script lang='ts'>
import Vue from 'vue'
import Header from '~/components/Header.vue'

export default Vue.extend({
  components: {
    Header
  },
  computed: {
    useExpandedHeader () {
      return this.$route?.fullPath === '/';
    }
  }
});
</script>
