'use strict';

/**
 * @ngdoc function
 * @name facebookProfileApp.controller:publishCtrl
 * @description
 * # publishCtrl
 * Controller of the facebookProfileApp
 */
angular.module('facebookProfileApp')
  .controller('publishCtrl', ['$scope', 'Facebook', 'userSettingsService', 'apiService', '$location',
    function ($scope, Facebook, userSettingsService, apiService, $location) {

      if( !userSettingsService.isLogged ) {
        $location.path('/login');
      }

      apiService.getPosts().then( function( object ) {
        $scope.posts = object.data;
      });

  }]);
