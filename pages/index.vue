<template>
  <main>
    <div class="content prose">
      <h2>About Us</h2>
      <p>We’re the official Computer Science departmental society for the <a href="https://surrey.ac.uk/" target="_blank">University of Surrey</a> and the <a href="https://ussu.co.uk/" target="_blank">University of Surrey Student’s Union</a>. We’re also the official Guildford Student chapter of the <a href="https://www.bcs.org/">British Computing Society</a>.</p>
      <p>We run academic and social events on a weekly basis for coders and non-coders alike, as well as bigger events throughout the year. You can learn to code or participate in beginner, intermediate or advanced game jams (game building competitions), hackathons and more.</p>
      <p>Students from all courses are welcome &mdash; computer industries involve people with very different skill sets from very different backgrounds, some of which don’t even involve computer, so if coding isn’t your thing, you can take part in graphic design competitions or sessions, or just hang out and meet people!</p>
    </div>

    <div class="center-mount">
      <LinkButton extended type="external" to="https://my.ussu.co.uk/_layouts/authenticate-ussu.aspx?source=/activity/Pages/Pay.aspx?type=Memberships%26item=1383">
        Join Us!
        <template #suffix><GlyphIcon of="arrow_continue" /></template>
      </LinkButton>
    </div>

    <br>

<!--    To get hover effect to work over button use: position: relative; z-index: 0;-->

    <div class="content prose" style="text-align: center; width: 100%; background-color: rgb(239, 239, 239); padding: 20px 10px; border-radius: 10px; position: relative; z-index: 0;">
      <h2><b>Your Committee!</b></h2>
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
      <LinkButton extended to="committee" style="color: white">
        See The Entire Team!
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
  padding: 4px;
  margin-left: 5%;
  margin-right: 5%;
}

.committeeMemberImage:hover img {
  transform: scaleY(-1);
  transition: 1s;
  cursor: pointer;
}

</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
