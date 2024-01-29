<template>
  <div class="event-grid">
    <div v-for="event in reversedEvents" :key="event.id" class="event-card">
      <img :src="event.img"  :alt="event.title"/>
      <h3>{{ event.title }}</h3>
      <p>Date: {{ event.date }}</p>
      <p>Location: {{ event.location }}</p>
      <p>Time: {{event.time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  computed: {
    reversedEvents() {
      return this.events.slice().reverse();
    },
  },
}
</script>

<style>
.event-grid {
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  align-content: center;
}

.event-card {
  background-color: rgb(239, 239, 239);
  box-shadow: 0 10px 20px rgba(31, 45, 55, 0.2), 0 2px 6px rgba(31, 45, 55, 0.1);
  margin: 10px;
  padding: 16px;
  border-radius: 0.4rem;
  text-align: center;

  h3{
    font-weight: bold;
  }

  img{
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;
  }

  transition: transform 0.3s ease-in-out;
  transform: scale(1);

  &:hover{
    transform: scale(1.05);
  }

}
</style>
