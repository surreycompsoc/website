import path from "path";
import { glob } from "glob";

import { config, mount } from "@vue/test-utils";
import Home from "~/pages/index.vue";

beforeAll(() => {
  // Polyfill Nuxt components.
  config.stubs.nuxt = { template: '<div />' };
  config.stubs['nuxt-link'] = { template: '<a><slot /></a>' };
  config.stubs['no-ssr'] = { template: '<span><slot /></span>' };

  // Load site components.
  glob.sync(path.join(__dirname, '../components/**/*.vue')).forEach(file => {
    const name = file.match(/(\w*)\.vue$/)[1];
    config.stubs[name] = require(file).default;
  });
});

describe('Home', () => {
  test('is a valid Vue instance', () => {
    const wrapper = mount(Home);
    expect(wrapper.vm).toBeTruthy();
  });
});
