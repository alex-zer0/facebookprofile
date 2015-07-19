'use strict';

/**
 * @ngdoc directive
 * @name facebookProfileApp.directive:publishForm
 * @description
 * # publish-form
 */
angular.module('facebookProfileApp')
  .directive('publishForm', function( apiService ) {

    return {
      templateUrl: '../views/publish-form.html',
      restrict: 'EA',
      scope: {
      },
      link : function( scope ) {

        function validateLink() {
          if( scope.link ) {
            apiService.isImage(scope.link).then(function (result) {
              scope.errors.link = !result;
            });
          }
          else {
            scope.errors.link = false;
          }
        }

        function validateTitle() {
          if ( scope.title.length > 50 ) {
            scope.errors.title = true;
            return;
          }
          scope.errors.title = false;
        }

        function validateMessage() {
          if ( scope.message.length > 300 ) {
            scope.errors.message = true;
            return;
          }
          scope.errors.message = false;
        }

        scope.title = '';
        scope.message = '';
        scope.link = '';
        scope.errors = {
          title: false,
          message: false,
          link: false
        };

        scope.$watch('link', validateLink, true);
        scope.$watch('title', validateTitle, true);
        scope.$watch('message', validateMessage, true);

        scope.publish = function() {
          if( !(scope.errors.title || scope.errors.link || scope.errors.message) ) {
            var post = {
              message: scope.title + '\r\n' + scope.message,
              link: scope.link
            };
            apiService.savePost( post ).then( function() {
              apiService.getPosts().then( function( object ) {
                scope.$parent.posts = object.data;
              })
            });
          }
        };
      }
    }

  });