const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.edu.goit.global',
    supportFile: false
  }
})
