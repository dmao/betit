'use strict';

/**
 * @ngdoc overview
 * @name betitApp
 * @description
 * # betitApp
 *
 * Main module of the application.
 */
angular
  .module('betitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
/*  .directive('showHidePassword', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element, attrs) {
                $(element).togglePassword(scope.$eval(attrs.toolbarTip));
            }
        };
  })*/
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

