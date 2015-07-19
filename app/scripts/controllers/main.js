'use strict';

/**
 * @ngdoc function
 * @name facebookProfileApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the facebookProfileApp
 */
angular.module('facebookProfileApp')
  .controller('mainCtrl', function ($scope, userSettingsService) {

    $scope.isLogged = userSettingsService.isLogged;


  });
