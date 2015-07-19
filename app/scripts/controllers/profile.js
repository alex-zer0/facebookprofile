'use strict';

/**
 * @ngdoc function
 * @name facebookProfileApp.controller:profileCtrl
 * @description
 * # profileCtrl
 * Controller of the facebookProfileApp
 */
angular.module('facebookProfileApp')
  .controller('profileCtrl', ['$scope', 'Facebook', 'userSettingsService', '$location',
    function ($scope, Facebook, userSettingsService, $location) {

      if( !userSettingsService.isLogged ) {
        $location.path('/login');
      }

      $scope.user = userSettingsService.userInfo;

  }]);
