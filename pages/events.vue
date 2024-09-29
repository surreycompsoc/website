<template>
  <div>
    <div class="title">
      <h2>
        Events Calendar
      </h2>
    </div>

    <EventsPanel :events="events" />

    <div style="text-align: center; margin-top: 2rem;">
      <LinkButton extended to="/" style="color: white">
        <template #prefix><GlyphIcon of="arrow_back" /></template>
        Back
      </LinkButton>
    </div>
  </div>
</template>

<script>
import EventsPanel from '~/components/EventsPanel.vue';

export default {
  components: {
    EventsPanel
  },
  data() {
    return {
      events: [
      ]
    }
  }
}
</script>

<style>
h2 {
  text-align: center;
  margin: 2rem;
  color: #374151;
  font-size: 2.3rem;
  font-weight: bold;
}
</style>
