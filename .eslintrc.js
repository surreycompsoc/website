module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [],
  // ignore static files because they're either non-code
  // or automatically generated (either way, there's no
  // point linting them.)
  ignorePatterns: ['static/**'],
  // add your custom rules here
  rules: {
    // (disable rule) Component names have contextual meaning with Nuxt.
    'vue/multi-word-component-names': 0,
    // (disable rule) Tag order depends on tag importance in component.
    // (e.g., components that primarily hold design only should have style first)
    'vue/component-tags-order': 0,
  }
}
