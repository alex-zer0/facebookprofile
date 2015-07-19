'use strict';

/**
 * @ngdoc function
 * @name facebookProfileApp.service:apiService
 * @description
 * # apiService
 * Service of the facebookProfileApp
 */
angular.module('facebookProfileApp')
  .service('apiService', function (Facebook, userSettingsService, $q, $resource) {

    function callFacebookAPI( url, method, dataObject ) {
      var deferred = $q.defer();
      Facebook.api( url, method, dataObject, function(response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          var data = angular.fromJson( response );
          deferred.resolve( data );
        }
      });
      return deferred.promise;
    }

    var service = {

      saveUser: function() {
        var url = '/me';
        var method = 'GET';
        var dataObject = {
          fields: 'email,birthday,first_name,last_name'
        };
        return callFacebookAPI( url, method, dataObject );
      },

      savePost: function( post ) {
        var url = '/me/feed';
        var method = 'POST';
        return callFacebookAPI( url, method, post );
      },

      getFriendsList: function() {
        var url = '/100001056348407/friends';
        var method = 'GET';
        var dataObject = {};
        return callFacebookAPI( url, method, dataObject );
      },

      getPosts: function() {
        var url = '/me/feed';
        var method = 'GET';
        var dataObject = {
          fields: 'id,message,link,name,picture',
          limit: 10
        };
        return callFacebookAPI( url, method, dataObject );
      },

      isImage: function( src ) {

        var deferred = $q.defer();
        var image = new Image();
        image.onerror = function() {
          deferred.resolve( false );
        };
        image.onload = function() {
          deferred.resolve( true );
        };
        image.src = src;
        return deferred.promise;

      }

    };
    return service;

  });
