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
          "status" : "Completed",
          "time": "10:00 - 16:00"
        },
        {
          "id": 2,
          "img": "/icon.png",
          "title": "Node.js Workshop",
          "date": "08/02/2024",
          "location": "AP Lab 2",
          "status" : "Completed",
          "time": "18:00 - 20:00"
        },
        {
          "id": 3,
          "img": "/icon.png",
          "title": "Stem Quiz",
          "date": "15/02/24",
          "location": "LTD",
          "status" : "Completed",
          "time": "18:20"
        },
        {
          "id": 4,
          "img": "/icon.png",
          "title": "Hackathon (Introduction & Briefing)",
          "date": "28/02/24",
          "location": "LTE",
          "status" : "Completed",
          "time": "13:00"
        },
        {
          "id": 5,
          "img": "/icon.png",
          "title": "Hackathon (Presentation & Awards)",
          "date": "06/03/24",
          "location": "TBC",
          "status" : "Completed",
          "time": "TBC"
        },
        {
          "id": 6,
          "img": "/movie.png",
          "title": "Movie Night",
          "date": "17/10/2024",
          "location": "LTL",
          "status" : "Completed",
          "time": "18:00 - 21:00"
        },
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
