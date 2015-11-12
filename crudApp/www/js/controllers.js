angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('AlunosCtrl', function($scope, $state, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  console.log("Call AlunosCtrl");
  $scope.remove = function(chat) {
      console.log("Call AlunosCtrl.remove()");
    Chats.remove(chat);
  };
$scope.edit = function(chat){
    $scope.chat = chat;
     console.log("Call AlunosCtrl.edit() " + $scope.chat.id);
    $state.go('tab.edit',{'Id':$scope.chat.id});
};
})

.controller('DetailCtrl', function($scope, $stateParams, Chats) {
  console.log("Call DetailCtrl");
  $scope.chat = Chats.get($stateParams.Id);
    
})

.controller('EditCtrl', function($scope, $state, $stateParams, Chats) {
    console.log("Call EditCtrl");
    $scope.chat = Chats.get($stateParams.Id);
    console.log("ID : " + $stateParams.Id );
    console.log("NOME : " + $scope.chat.name );
    console.log("RA : " + $scope.chat.ra );
    
    $scope.save = function(chat){
        console.log("NOME : " + chat.name );
        console.log("RA : " + chat.ra );
        
        $state.go('tab.list');
    };
    
})

.controller('AddCtrl', function($scope, $state) {
    console.log("Call AddCtrl");
    $scope.chat={
    id: null,
    name: null,
    ra: null
  };
    
    $scope.save = function(chat){
        console.log("NOME : " + chat.name );
        console.log("RA : " + chat.ra );
        
        $state.go('tab.list');
    };
});
