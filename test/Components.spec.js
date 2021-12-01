import { config, mount } from '@vue/test-utils';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import LinkButton from "~/components/LinkButton.vue";
import GlyphIcon from "~/components/GlyphIcon.vue";

beforeAll(() => {
  // Polyfill Nuxt components.
  config.stubs.nuxt = { template: '<div />' };
  config.stubs['nuxt-link'] = { template: '<a><slot /></a>' };
  config.stubs['no-ssr'] = { template: '<span><slot /></span>' };
});

describe('Header', () => {
  test('is a valid Vue instance', () => {
    const wrapper = mount(Header);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe('Footer', () => {
  test('is a valid Vue instance', () => {
    const wrapper = mount(Footer);
    expect(wrapper.vm).toBeTruthy();
  });

  test('loads the correct year', () => {
    const wrapper = mount(Footer);

    // Checks that the year is a valid number, at most 5 from the current
    // year. (This is so the tests don't fail weirdly if the CI server has a
    // different date, and we naturally hold the expectation that if the year
    // is a valid four-digit number close to the current year it would be
    // highly unusual that it be wrong.)
    expect(wrapper.vm.year).toBeCloseTo(
      new Date().getUTCFullYear(),
      -1 // decimal places (-1 means check first digit before decimal separator)
    );
  })
});

describe('LinkButton', () => {
  test('is a valid Vue instance', () => {
    const wrapper = mount(LinkButton, {
      props: {
        to: 'somewhere'
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
});

describe('GlyphIcon', () => {
  test('is a valid Vue instance', () => {
    const wrapper = mount(GlyphIcon, {
      props: {
        of: "arrow_continue"
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
