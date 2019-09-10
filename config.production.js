module.exports = {
  build: {
    destination: {
      path: 'build_production',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
    },
    replaceStrings: {
      '\\s?style=""': '',
    },
    preferBgColorAttribute: true,
  },

  prettify: {
    enabled: true,
  },
}
