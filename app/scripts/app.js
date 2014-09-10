'use strict';

/**
 * @ngdoc overview
 * @name indexexDbApp
 * @description
 * # indexexDbApp
 *
 * Main module of the application.
 */
angular
  .module('indexexDbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'cart'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main',{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html'
        // controller: 'AboutCtrl'
      });
  });
