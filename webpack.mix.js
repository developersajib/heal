let mix = require('yh-mix');

mix.options({
    processCssUrls: false
});


mix.setPublicPath('html')
   .js('resources/js/app.js', 'html/assets/js')
   .sass('resources/scss/app.scss', 'html/assets/css')
   .version()
   .copyDirectory('resources/fonts', 'html/assets/fonts')
   .copyDirectory('resources/images', 'html/assets/images')
   .copyDirectory('resources/scss/lib', 'html/assets/css')
   .copyDirectory('resources/js/lib', 'html/assets/js')
   .browserSync({
      server: { baseDir: ['html'] },
      proxy: undefined,
      files: [
         'assets/images/**',
         'assets/js/**/*.js',
         'assets/css/**/*.css',
     ],
   });
;