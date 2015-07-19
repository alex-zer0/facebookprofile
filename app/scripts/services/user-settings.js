'use strict';

/**
 * @ngdoc function
 * @name facebookProfileApp.service:userSettingsService
 * @description
 * # userSettingsService
 * Service of the facebookProfileApp
 */
angular.module('facebookProfileApp')
  .service('userSettingsService', function () {

    var service = {
      isLogged: false,
      permissions: 'email,user_birthday,publish_actions,user_friends,user_posts,user_photos',
      searchArray: [
        'Антон', 'Андрей', 'Женя', 'Жанна', 'Марина'
      ],
      userInfo: {
        firstName: 'не указано',
        lastName: 'не указана',
        email: 'не указан',
        birthday: 'не указан'
      },
      updateUserInfo: function( data ) {
        this.userInfo.firstName = data.first_name;
        this.userInfo.lastName = data.last_name;
        this.userInfo.email = data.email;
        this.userInfo.birthday = data.birthday;
      }
    };
    return service;

  });
