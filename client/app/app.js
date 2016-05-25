angular.module('doggiepedia', [
  'doggiepedia.home',
  'doggiepedia.breeds',
  'doggiepedia.services',
  'doggiepedia.donate',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    })
    .when('/breeds', {
      templateUrl: 'app/breeds/breeds.html',
      controller: 'BreedController'
    })
    .when('/donate', {
      templateUrl: 'app/donate/donate.html',
      controller: 'DonateController'
    })
})

.run(function($rootScope, $location) {

  // $rootScope.$on('$routeChangeStart', function (evt, next, current) {
  //   // $location.path('/');
  // });
});