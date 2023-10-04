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


<style>
.discordOverlay{
  box-shadow:2px 2px 5px ;
  background-color:#7289da;
  padding:10px;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  margin: 10px;
  object-fit: contain;
  object-position: bottom;
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
