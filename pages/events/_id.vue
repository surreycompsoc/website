<template>
  <div class="content">
    <div v-if="event" class="center-mount">
      <h2>{{ event.title }}</h2>
      <img :src="event.img" :alt="event.title" class="event-image" />
      <p><span class="text-bold"></span> {{ event.details }}</p>
      <p><span class="text-bold">Date:</span> {{ event.date }}</p>
      <p><span class="text-bold">Location:</span> {{ event.location }}</p>
      <p><span class="text-bold">Time:</span> {{ event.time }}</p>
      <p><span class="text-bold">Status:</span> {{ event.status }}</p>
    </div>
    <div v-else class="center-mount">
      <p>Event not found!</p>
    </div>
    <div style="text-align: center; margin-top: 2rem;">
      <LinkButton extended to="/events" style="color: white">
        <template #prefix><GlyphIcon of="arrow_back" /></template>
        Back
      </LinkButton>
    </div>
  </div>
</template>

<script>
export default {
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
          "details": `Get ready for an epic night with @CompSoc! 🎬 🍿
This Thursday, we’re screening the mind-bending film Ex Machina!
Join us for an evening of tech, AI, and a whole lot of thrills. 🤖`,
          "date": "17/10/2024",
          "location": "LTL",
          "status" : "Completed",
          "time": "18:00 - 21:00"
        },
      ],
      event: null // This will store the matched event
    }
  },
  mounted() {
    const eventId = parseInt(this.$route.params.id);
    this.event = this.events.find(event => event.id === eventId);
    console.log("Selected Event:", this.event);
  }
}
</script>

<style scoped>
.event-image {
  width: 500px;
  height: 500px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 10%;
}
</style>
