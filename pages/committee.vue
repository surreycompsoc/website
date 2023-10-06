<template>
<main>
  <div class="content prose" style="text-align: center; width: 100%; background-color: rgb(239, 239, 239); padding: 20px 10px; border-radius: 10px; position: relative; z-index: 0;">
    <h2><b>Introducing The Signatures! </b></h2>
    <div class="committee-container">
      <div align="center" class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/alexGodwin_person.jpg">
        </div>
        <h3>Vice President</h3>
        <p>Alex Godwin</p>
      </div>

      <br>

      <div align="center" class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/mia_person.jpg">
        </div>
        <h3>President</h3>
        <p>Mia Tran</p>
      </div>

      <br>

      <div>
        <div align="center" class="committee">
          <div class="committeeMemberImage">
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
        <div class="committeeMemberImage">
          <img src="~/assets/images/Portrait_Placeholder.png">
        </div>
        <h3>Social Media Manager</h3>
        <p>SM Manager Name</p>
      </div>

      <br>

      <div align="center" class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/Portrait_Placeholder.png">
        </div>
        <h3>Web Master</h3>
        <p>WM Name</p>
      </div>

      <br>

      <div>
        <div align="center" class="committee">
          <div class="committeeMemberImage">
            <img src="~/assets/images/Portrait_Placeholder.png">
          </div>
          <h3>Wellbeing Officer</h3>
          <p>WO Name</p>
        </div>
      </div>
      </div>

    <div class="committee-container">
      <div align="center" class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/Portrait_Placeholder.png">
        </div>
        <h3>Event Coordinator</h3>
        <p>EC Name</p>
      </div>

      <br>

      <div align="center" class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/Portrait_Placeholder.png">
        </div>
        <h3>Graphic Designer</h3>
        <p>GD Name</p>
      </div>

      <br>

      <div align="center" class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/Portrait_Placeholder.png">
        </div>
        <h3>Default</h3>
        <p>Default</p>
      </div>


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
