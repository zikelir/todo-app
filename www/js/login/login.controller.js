angular.module('login.module', ['ui.router']);
angular.module('login.module')
.controller('loginCtrl', function ($scope, Platform) { 
     Platform.ready(function() {
    // Hide the status bar
    StatusBar.hide();
  });

 });


