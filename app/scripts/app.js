'use strict';

angular
  .module('todoApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalForageModule',
    'toastr'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])

;
