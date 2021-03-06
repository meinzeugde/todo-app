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
        templateUrl: 'views/main/index.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])

;
