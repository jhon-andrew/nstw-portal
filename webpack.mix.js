const mix = require('laravel-mix')
const path = require('path')

mix.setPublicPath('public').js('resources/front-end/main.js', 'public/js')
mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/front-end')
    }
  }
})
