'use strict';

/**
 * @ngdoc function
 * @name betitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the betitApp
 */
angular.module('betitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
