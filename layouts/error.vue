<template>
  <div id="appError">
    <div class="error">
      <h2>{{ error.statusCode }}.</h2>
      <p>{{ error.message || "An unexpected error occurred" }}.</p>
      <LinkButton class="mt-4" to="/">
        Return Home
        <template #suffix><GlyphIcon of="arrow_continue" /></template>
      </LinkButton>
    </div>
  </div>
</template>

<style lang="scss">
#appError {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .error {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      color: #374151;
      @apply text-8xl;
    }

    p {
      color: #4B5563;
      @apply text-xl;
    }
  }
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  layout: 'default',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
});
</script>
