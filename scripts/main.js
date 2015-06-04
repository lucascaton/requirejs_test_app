requirejs.config({
  baseUrl: 'scripts',
  paths: {
    jquery: 'jquery-latest',
    'something/lucas': 'helper/other'
  }
});

requirejs(['jquery'], function(jQueryAsWell) {
  console.log(jQueryAsWell);
  console.log($);
});

requirejs(['helper/util']);
requirejs(['something/lucas']);
