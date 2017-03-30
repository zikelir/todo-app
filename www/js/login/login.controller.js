angular.module('login.module', ['ionic', 'ui.router']);

angular.module('login.module')
.controller('loginCtrl', function ($scope, $state, $ionicSideMenuDelegate, $ionicHistory) { 

  $ionicSideMenuDelegate.canDragContent(false);

  //disable back button after login
  $ionicHistory.nextViewOptions({
          disableBack: false,
          historyRoot: true
        });
  
  // Form data for the login modal
  $scope.loginData = {
      username: "",
      password: ""
  };

  // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('js/login/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    if($scope.loginData.username === "a" && $scope.loginData.password === "a") {
      $state.go('app.search');
      $scope.loginData.username = '';
      $scope.loginData.password = '';            
    }
    console.log('Doing login', $scope.loginData);

    $scope.drag = false;

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //   $scope.closeLogin();
    // }, 1000);
  };

 });


