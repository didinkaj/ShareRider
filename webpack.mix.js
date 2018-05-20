let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')

	.styles([
    'public/global/css/bootstrap.minfd53.css',
    'public/global/css/bootstrap-extend.minfd53.css',
    'public/assets/css/site.minfd53.css',
    'public/global/css/skintools.minfd53.css',
    'public/global/vendor/animsition/animsition.minfd53.css',
    'public/global/vendor/asscrollable/asScrollable.minfd53.css',
    'public/global/vendor/switchery/switchery.minfd53.css',
    'public/global/vendor/slidepanel/slidePanel.minfd53.css',
    'public/global/vendor/intro-js/introjs.minfd53.css',
    'public/global/vendor/slidepanel/slidePanel.minfd53.css',
    'public/global/vendor/flag-icon-css/flag-icon.minfd53.css',
    'public/global/vendor/waves/waves.minfd53.css',
    'public/assets/skins/red.css',
], 'public/css/all.css');






