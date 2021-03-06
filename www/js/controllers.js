angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicNavBarDelegate, $ionicSideMenuDelegate) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.user = {
      "name": "kirito",
      "personalInfo": "This is a mock of user info",
      "userInfoComments": 2,
      "userInfoLikes": 5
    };

    var date = new Date();
    $scope.today = ('0' + date.getDate()).slice(-2)  + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
    // $scope.today = date.getDate() + "/" + date.getMonth() + "/" + date.getYear();
console.log(date.getDate() + " getdate");
console.log(date.getMonth() + " getmonth");
console.log(date.getFullYear() + " getyear");




    $ionicSideMenuDelegate.canDragContent(true);


  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [{
        title: 'Reggae',
        id: 1
      },
      {
        title: 'Chill',
        id: 2
      },
      {
        title: 'Dubstep',
        id: 3
      },
      {
        title: 'Indie',
        id: 4
      },
      {
        title: 'Rap',
        id: 5
      },
      {
        title: 'Cowbell',
        id: 6
      }
    ];
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {});
