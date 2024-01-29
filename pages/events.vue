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
        {
          "id": 1,
          "img": "/icon.png",
          "title": "Refreshers Fair",
          "date": "06/02/2024",
          "location": "PATS Field",
          "time": "10:00 - 16:00"
        },
        {
          "id": 2,
          "img": "/icon.png",
          "title": "Node.js Workshop",
          "date": "08/02/2024",
          "location": "AP Lab 2",
          "time": "18:00 - 20:00"
        },
        // {
        //   "id": 3,
        //   "img": "/icon.png",
        //   "title": "Hackathon (Introduction)",
        //   "date": "TBC",
        //   "location": "Location 1",
        //   "time": "TBC"
        // },
        // {
        //   "id": 4,
        //   "img": "/icon.png",
        //   "title": "Hackathon (Presentation)",
        //   "date": "TBC",
        //   "location": "Location 2",
        //   "time": "TBC"
        // },
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
