'use strict';

/**
 * @ngdoc function
 * @name facebookProfileApp.controller:friendsCtrl
 * @description
 * # friendsCtrl
 * Controller of the facebookProfileApp
 */
angular.module('facebookProfileApp')
  .controller('friendsCtrl', ['$scope', 'Facebook', 'friendsList', 'userSettingsService', 'apiService', '$location',
    function ($scope, Facebook, friendsList, userSettingsService, apiService, $location) {

      if( !userSettingsService.isLogged ) {
        $location.path('/login');
      }

      $scope.friends = friendsList;
      $scope.searchOptions = {
        array: userSettingsService.searchArray
      };

  }]);
