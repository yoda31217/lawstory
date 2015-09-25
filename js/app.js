angular.module('lawApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {

  }])

  .run([function () {

    $('#features-carousel').carousel({
      interval: 4000
    }).click(function () {
      $('#features-carousel').carousel('next');
    });

    $('html>head>link[href*="www.blogger.com"]').remove();

  }]);


