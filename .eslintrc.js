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
  rules: {}
}
