'use strict';

/**
 * @ngdoc filter
 * @name facebookProfileApp.filter:friendsFilter
 * @description
 * # friendsFilter
 */
angular.module('facebookProfileApp')
  .filter('friendsFilter', function () {

    return function( input, searchArray ) {

      var resultArray = [];
      for( var friendId in input ) {
        if( searchArray.indexOf( input[friendId].firstName ) > -1 ) {
          resultArray.push( input[friendId] );
        }
      }
      return resultArray;

    }

  });