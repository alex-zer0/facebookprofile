'use strict';

/**
 * @ngdoc overview
 * @name facebookProfileApp
 * @description
 * # facebookProfileApp
 *
 * Main module of the application.
 */
angular
  .module('facebookProfileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'facebook'
  ])
  .config(function ($routeProvider, FacebookProvider) {
    var fbAppId = '1447434672248057';

    $routeProvider
      .when('/', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/publish', {
        templateUrl: 'views/publish.html',
        controller: 'publishCtrl'
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        controller: 'friendsCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

    FacebookProvider.init(fbAppId);
  })
  .run( function( Facebook ) {

    Facebook.getLoginStatus( function( response ) {
      if (response.status === 'connected') {
        Facebook.logout();
      }
    });

  });
