<template>
<main>
  <div class="content prose" style="text-align: center; width: 100%; background-color: rgb(239, 239, 239); padding: 20px 10px; border-radius: 10px; position: relative; z-index: 0;">
    <h2><b>Introducing The Signatures! </b></h2>
    <div class="committee-container">
      <div align="center" class="committee">

        <div class="vpImg">
          <img src="~/assets/images/alexGodwin_person.jpg">
        </div>
        <h3>Vice President</h3>
        <p>Alex Godwin</p>
      </div>

      <br>

      <div align="center" class="committee">
        <div class="presidentImg">
          <img src="~/assets/images/mia_person.jpg">
        </div>
        <h3>President</h3>
        <p>Mia Tran</p>
      </div>

      <br>

      <div>
        <div align="center" class="committee">
          <div class="treasurerImg">
            <img src="~/assets/images/rup_person.jpg">
          </div>
          <h3>Treasurer</h3>
          <p>Rup Singh</p>
        </div>
      </div>
    </div>

    <h2><b>Your Non-Signatures!</b></h2>

    <div class="committee-container">
      <div align="center" class="committee">
        <div class="socialManagerImg">
          <img src="~/assets/images/Mii/keerthana_mii.jpg">
        </div>
        <h3>Social Media Manager</h3>
        <p>Keerthana Kumar</p>
      </div>

      <br>

      <div align="center" class="committee">
        <div class="webmasterImg">
          <img src="~/assets/images/aran_person.jpg">
        </div>
        <h3>Web Master</h3>
        <p>Aran Jannson</p>
      </div>

      <br>

      <div>
        <div align="center" class="committee">
          <div class="wellfareImg">
            <img src="~/assets/images/ryan_person.jpg">
          </div>
          <h3>Wellfare Officer</h3>
          <p>Ryan Robson</p>
        </div>
      </div>
      </div>

    <div class="committee-container">
      <div align="center" class="committee">
        <div class="eventCoordImg">
          <img src="~/assets/images/Mii/karis_mii.jpg">
        </div>
        <h3>Event Coordinator</h3>
        <p>Karis Koo</p>
      </div>

      <br>

      <div align="center" class="committee">
        <div class="graphicsDesImg">
          <img src="~/assets/images/Mii/omm_mii.jpg">
        </div>
        <h3>Graphic Designer</h3>
        <p>Omm</p>
      </div>


      <br>


    </div>

    <LinkButton extended to="/" style="color: white">
      Back
      <template #suffix><GlyphIcon of="arrow_continue" /></template>
    </LinkButton>

  </div>
</main>

</template>

<style lang="scss">
.committee-container {
  display: flex;
}

@media (max-width: 500px) {
  .committee-container {
    flex-direction: column;
  }
}
.committeeMemberImage {
  img {
    width: 45%;
    border-radius: 50%;
  }

  align-content: center;
  object-fit: contain;
  padding: 5px;
  margin-left: 5%;
  margin-right: 5%;
}
</style>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
