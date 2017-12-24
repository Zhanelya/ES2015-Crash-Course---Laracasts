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
   .js(['resources/assets/js/main.js', 
   	'resources/assets/js/classes/Person.js', 
   	'resources/assets/js/classes/ConsoleLogger.js',
   	'resources/assets/js/classes/AlertLogger.js',
   	'resources/assets/js/classes/Task.js', 
   	'resources/assets/js/classes/TaskCollection.js',
   	'resources/assets/js/classes/User.js'
   	], 'public/js/main.js')
   .sass('resources/assets/sass/app.scss', 'public/css');