const mix = require('laravel-mix')
const path = require('path')

mix
  .setPublicPath('public')
  .js('resources/front-end/main.js', 'public/js')
  .webpackConfig(
    {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'resources/front-end')
        }
      }
    }
  )

if (process.env.NODE_ENV === 'development') {
  mix.sourceMaps(true, 'source-map')
}
