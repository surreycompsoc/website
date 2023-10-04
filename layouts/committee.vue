<template>
  <div id="root">
    <div style="float: left; position: fixed; display: block; object-position: bottom; margin: 10px; bottom: 0; ">
      <img class="discordOverlay" src="https://img.icons8.com/ios-filled/1000/000000/discord.png" />
    </div>


    <Header :expanded='useExpandedHeader' />
    <Nuxt />
    <Footer />
  </div>
</template>
<script lang="ts">
</script>

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
