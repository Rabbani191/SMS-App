var app = angular.module ('smsApp',['ngRoute']);

app.controller('loginController',function($scope, $http, $location, SessionService, $rootScope){
  $rootScope.ok = false;
  $scope.settings = {
    submitted : false
  };

  $scope.formSubmit = function (){
     $scope.settings.submitted = true;
     if($scope.user_form.$valid){
       $http({  method : "POST",url : "/api",data: {'admin':$scope.username , 'pass':$scope.password}})
       .then(function(response){
          $scope.error = false;
          SessionService.setUserAuthenticated(true);
          $rootScope.ok = true;
          $location.path('message');


        },
         function(err){
           $scope.error ='Error:'+ err.data;
         });
      }
   }
});


app.controller('mainController',function($scope, $http, $location, $rootScope){
});

app.controller('superController',function($scope, $http, $location){

});

app.controller('messageController',function($scope, $http, $location){

});

app.controller('logController',function($scope, $http, $location){

});

app.controller('contactController',function($scope, $http, $location){

});

app.service('SessionService', function(){
    var userIsAuthenticated = false;

    this.setUserAuthenticated = function(value){
        userIsAuthenticated = value;
    };

    this.getUserAuthenticated = function(){
        return userIsAuthenticated;
      };

    });

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
      templateUrl: 'partial/login.html',
      controller: 'loginController'
   })
  .when('/message', {
     templateUrl: 'partial/message.html',
     resolve:{
         check :function(SessionService, $location){   //function to be resolved, accessFac and $location Injected
             if(SessionService.getUserAuthenticated()){
               console.log ('here');   //check if the user has permission -- This happens before the page loads
              }
              else{
               $location.path('/');                //redirect user to home if it does not have permission.
               alert("You don't have access here");
              }
             }
           },
     controller: 'messageController'
  })
  .when('/log', {
     templateUrl: 'partial/log.html',
     resolve:{
         check :function(SessionService, $location){   //function to be resolved, accessFac and $location Injected
             if(SessionService.getUserAuthenticated()){
               console.log ('here');   //check if the user has permission -- This happens before the page loads
              }
              else{
               $location.path('/');                //redirect user to home if it does not have permission.
               alert("You don't have access here");
              }
             }
           },
     controller: 'logController'
  })
  .when('/contact', {
     templateUrl: 'partial/contact.html',
     resolve:{
         check :function(SessionService, $location){   //function to be resolved, accessFac and $location Injected
             if(SessionService.getUserAuthenticated()){
               console.log ('here');   //check if the user has permission -- This happens before the page loads
              }
              else{
               $location.path('/');                //redirect user to home if it does not have permission.
               alert("You don't have access here");
              }
             }
           },
     controller: 'contactController'
  })
});
app.run(['$rootScope', '$location', function($rootScope, $location) {

      var path = function() {
          return $location.path();
      };
      $rootScope.$watch(path, function(newVal, oldVal) {
          $rootScope.activetab = newVal;
      });
  }]);
