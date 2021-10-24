let mix = require('laravel-mix');

mix.js('assets/js/app.js', 'assets/js/app.min.js')
    .css('assets/css/app.css', 'assets/css/app.min.css');