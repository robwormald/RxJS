var app = angular.module('rx-docs',['ui.router','ngMaterial']);

app.config(function($stateProvider){
  
  $stateProvider.state('docs',{
    template: "<h1>Docs</h1>"
  })
  
});

app.controller('AppController',function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
})

app.run(function(){
    console.log('hello world');
})
