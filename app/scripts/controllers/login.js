'use strict';

/**
 * @ngdoc function
 * @name facebookProfileApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the facebookProfileApp
 */
angular.module('facebookProfileApp')
  .controller('loginCtrl', ['$scope', 'Facebook', 'userSettingsService', '$location', 'apiService',
    function ($scope, Facebook, userSettingsService, $location, apiService) {

      if( userSettingsService.isLogged ) {
        $location.path('/');
      }

      $scope.login = function () {

        Facebook.login( function(response) {
          if (response.status == 'connected') {

            userSettingsService.isLogged = true;
            $scope.$parent.isLogged = true;

            apiService.saveUser().then( function( data ){
              userSettingsService.updateUserInfo( data );
              $location.path('/');
            });

          }
        }, { scope: userSettingsService.permissions });

      };

  }]);
