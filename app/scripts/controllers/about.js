'use strict';

/**
 * @ngdoc function
 * @name betitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the betitApp
 */
angular.module('betitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
