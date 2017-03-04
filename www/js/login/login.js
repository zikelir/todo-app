'use strict';

angular
  .module('login.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'js/login/login.html',
            controller: 'loginCtrl'
          }
        }
      })
  });