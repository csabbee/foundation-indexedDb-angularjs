'use strict';

/**
 * @ngdoc function
 * @name indexexDbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the indexexDbApp
 */
angular.module('indexexDbApp')
  .controller('MainCtrl',[ '$scope', 'Cart', function ($scope, Cart) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
