<template>
  <main>
    <div class="content banner">
      <h2>🚧 Under Construction!</h2>
      <p>Please bear with us whilst we develop our new site!</p>
      <p>In the mean time, you can <a href="https://discord.gg/BypMWcnuY7" target="_blank">join our Discord server</a> to get the most up-to-date information.</p>
    </div>

    <div class="content prose">
      <h2>About Us</h2>
      <p>We’re the official Computer Science departmental society for the <a href="https://surrey.ac.uk/" target="_blank">University of Surrey</a> and the <a href="https://ussu.co.uk/" target="_blank">University of Surrey Student’s Union</a>. We’re also the official Guildford Student chapter of the <a href="https://www.bcs.org/">British Computing Society</a>.</p>
      <p>We run academic and social events on a weekly basis for coders and non-coders alike, as well as bigger events throughout the year. You can learn to code or participate in beginner, intermediate or advanced game jams (game building competitions), hackathons and more.</p>
      <p>Students from all courses are welcome &mdash; computer industries involve people with very different skill sets from very different backgrounds, some of which don’t even involve computer, so if coding isn’t your thing, you can take part in graphic design competitions or sessions, or just hang out and meet people!</p>
    </div>

    <div class="center-mount">
      <LinkButton extended type="external" to="https://my.ussu.co.uk/_layouts/authenticate.aspx?source=https://my.ussu.co.uk/activity/Pages/GetMemberships.aspx">
        Join Us!
        <template #suffix><GlyphIcon of="arrow_continue" /></template>
      </LinkButton>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
