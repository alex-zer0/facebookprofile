'use strict';

/**
 * @ngdoc function
 * @name facebookProfileApp.constant:friendsList
 * @description
 * # friendsList
 * Service of the facebookProfileApp
 */
angular.module('facebookProfileApp')
  .constant('friendsList', [
      {
        firstName: 'Александр',
        lastName: 'Громов'
      },
      {
        firstName: 'Андрей',
        lastName: 'Васильев'
      },
      {
        firstName: 'Жанна',
        lastName: 'Певцова'
      }
  ]);
