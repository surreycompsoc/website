<template>
  <div class="event-grid">
    <div v-for="event in reversedEvents" :key="event.id" class="event-card">
      <NuxtLink :to="`/events/${event.id}`">
        <img :src="event.img" :alt="event.title" />
        <h3>{{ event.title }}</h3>
        <p>at: {{ event.date }}</p>
        <p>
          <span :class="getStatusClass(event.status)">{{ event.status }}</span>
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  computed: {
    reversedEvents() {
      return this.events.slice().reverse();
    },
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case 'Completed':
          return 'status-completed';
        case 'Ongoing':
          return 'status-ongoing';
        case 'Upcoming':
          return 'status-upcoming';
        default:
          return '';
      }
    },
  },
};
</script>

<style>
.event-grid {
  margin-top: 0.5rem;
  padding: 16px;
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
  cursor: pointer;

  h3 {
    font-weight: bold;
  }

  img {
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;
  }

  transition: transform 0.3s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
  }
}

/* Status styles */
.status-completed {
  color: green; /* Completed - green */
}

.status-ongoing {
  color: yellow; /* Ongoing - yellow */
}

.status-upcoming {
  color: blue; /* Upcoming - blue */
}
</style>
