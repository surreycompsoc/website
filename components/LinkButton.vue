<template>
  <nuxt-link v-if="type === 'internal'" class="appLinkButton" :class="{ extended }" :to="to">
    <span class="prefix"><slot name="prefix" /></span> <slot /> <span class="suffix"><slot name="suffix" /></span>
  </nuxt-link>
  <a v-else class="appLinkButton" :class="{ extended }" :href="to" target="_blank">
    <span class="prefix"><slot name="prefix" /></span> <slot /> <span class="suffix"><slot name="suffix" /></span>
  </a>
</template>

<style lang="scss">
.appLinkButton {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: white;
  background: #4BB1BA;
  background: linear-gradient(27.73deg, #7089CC 29.47%, #4BB1BA 100%);
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to bottom, #333, #111);

  }
  border-radius: 6px;
  padding: 8px 25px;
  outline: none !important;
  cursor: pointer !important;
  border: none;
  text-decoration: none;

  &.extended {
    padding: 8px 60px;
  }

  &::after {
    position: absolute;
    content: "";
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(27.73deg, #7089CC 29.47%, #4BB1BA 100%);

    @media (prefers-color-scheme: dark) {
      background: linear-gradient(to bottom, #333, #111);

    }

    border-radius: 6px;
    transition: filter .2s ease-out;
  }

  .suffix, .prefix {
    display: inline-block;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    height: 18px;
    padding-left: 5px;
    transition: padding .2s ease-out, left .2s ease-out;

    svg {
      height: 18px;
    }
  }

  .prefix {
    padding-left: 0;
    padding-right: 5px;
  }

  &:hover {
    .suffix {
      left: 5px;
      padding-left: 10px;
    }

    &::after {
      filter: blur(10px);
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: false,
      default: 'internal'
    },
    to: {
      type: String,
      required: true,
    },
    extended: {
      type: Boolean,
      default: false,
    }
  }
});
</script>
