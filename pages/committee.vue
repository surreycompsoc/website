<template>
<main>
  <div class="content prose" style="box-shadow: 0 10px 20px rgba(31, 45, 55, 0.2), 0 2px 6px rgba(31, 45, 55, 0.1); text-align: center; width: 100%; background-color: rgb(239, 239, 239); padding: 20px 10px; border-radius: 10px; position: relative; z-index: 0;">
    <h2><b>Introducing The Signatories!</b></h2>
    <br>

    <div class="committee-container">
      <div class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/saidAit_person.jpg">
        </div>

        <h3>Vice President</h3>
        <p>Saïd Ait Ennecer</p>
      </div>

      <br>

      <div class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/myo_person.jpg">
        </div>
        <h3>President</h3>
        <p>Myo Myint Thu</p>
      </div>

      <br>

      <div class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/nigel_person.jpg">
        </div>
        <h3>Treasurer</h3>
        <p>Nigel</p>
      </div>
    </div>

    <br><br>

    <h2><b>The Non-Signatories!</b></h2>
    <br>
    
    <div class="committee-container">
      <div class="committee">
        <div class="committeeMemberImage">
        <img src="~/assets/images/tom_person.jpg">
        </div>
        <h3>Social Media</h3>
        <h3>Manager</h3>
        <p>Tomisin</p>
      </div>

      <br>

      <div class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/raghav_person.jpg">
        </div>
        <h3>Social Media</h3>
        <h3>Manager</h3>
        <p>Raaghav K</p>
      </div>

      <br>

      <div class="committee">
        <div class="committeeMemberImage">
        <img src="~/assets/images/damy_person.jpg">
        </div>
        <h3>Graphic Designer</h3>
        <p>Damy</p>
      </div>

      <br>

      <div class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/sami_person.jpg">
        </div>
        <h3>Graphic Designer</h3>
        <p>Sami</p>
      </div>

    </div>

    <br>

    <div class="committee-container">

      <div class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/alis_person.jpg">
        </div>
        <h3>Event</h3>
        <h3>Manager</h3>
        <p>Alistair</p>
      </div>

      <br>

      <div class="committee">
        <div class="committeeMemberImage">
          <img src="~/assets/images/ryan1_person.jpg">
        </div>
        <h3>Event</h3>
        <h3>Manager</h3>
        <p>Rayan Khan</p>
      </div>

      <br>

      <div class="committee">
        <div class="committeeMemberImage">
        <img src="~/assets/images/dhimant_person.jpg">
        </div>
        <h3>WebMaster</h3>
        <p>Dhimant Panchal</p>
      </div>

      <br>

      <div class="committee">
        <div class="committeeMemberImage">
        <img src="~/assets/images/iyad_person.jpg">
        </div>
        <h3>WebMaster</h3>
        <p>Iyad Cherifi</p>
      </div>
    </div>

    <br>

    <div class="committee-container">
      <div class="committee">
        <div class="committeeMemberImage">
        </div>
        <h3>Welfare Officer</h3>
        <p>Omar houchou</p>
      </div>

    <br>

    <div class="committee-container">
      <div class="committee">
        <div class="committeeMemberImage">
        <img src="~/assets/images/rossie_person.jpg">
        </div>
        <h3>Fundraiser</h3>
        <p>Rossie</p>
      </div>
    </div>
    </div>

    <br><br>

    <LinkButton extended to="/" style="color: white">
      <template #prefix><GlyphIcon of="arrow_back" /></template>
      Back
    </LinkButton>

    <br>
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
