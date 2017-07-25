var app = angular.module ('smsApp',['ngRoute', 'ui.bootstrap']);

app.controller('loginController',function($scope, $http, $location, SessionService, $rootScope){
  $rootScope.ok = false;
  $scope.settings = {
    submitted : false
  };

  $scope.formSubmit = function (){
     $scope.settings.submitted = true;
     if($scope.user_form.$valid){
       $http({  method : "POST",url : "/admin",data: {'admin':$scope.username , 'pass':$scope.password}})
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


app.controller('messageController',function($scope, $http, $location, $uibModal){
  $scope.books =[
   {
   "_id" : "594c03b1d697d67eb6d57568",
   "orginal" : "jj",
   "short" : "https://goo.gl/xF2u",
   "country" : "pk",
   "click" : 0,
   "timeCreated" : "Thu Jun 22 2017 22:51:45 GMT+0500 (PKT)",
   "__v" : 0
  },
  {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "in",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
},
    {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "pk",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
    }

   ,
   {
       "_id" : "594c06c4d697d67eb6d5756a",
       "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
       "short" : "https://goo.gl/J7Ak12",
       "country" : "",
       "click" : 0,
       "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
       "__v" : 0
   },
   {
   "_id" : "594c03b1d697d67eb6d57568",
   "orginal" : "jj",
   "short" : "https://goo.gl/xF2u",
   "country" : "pk",
   "click" : 0,
   "timeCreated" : "Thu Jun 22 2017 22:51:45 GMT+0500 (PKT)",
   "__v" : 0
  },
  {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "in",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
  },
  {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "pk",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
  }

   ,{
 "_id" : "594c03b1d697d67eb6d57568",
 "orginal" : "jj",
 "short" : "https://goo.gl/xF2u",
 "country" : "pk",
 "click" : 0,
 "timeCreated" : "Thu Jun 22 2017 22:51:45 GMT+0500 (PKT)",
 "__v" : 0
  },
  {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "in",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
  },
  {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "pk",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
}

   ,{
 "_id" : "594c03b1d697d67eb6d57568",
 "orginal" : "jj",
 "short" : "https://goo.gl/xF2u",
 "country" : "pk",
 "click" : 0,
 "timeCreated" : "Thu Jun 22 2017 22:51:45 GMT+0500 (PKT)",
 "__v" : 0
  },
  {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "in",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
  },
  {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "pk",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
  }

   ,
   {
 "_id" : "594c03b1d697d67eb6d57568",
 "orginal" : "jj",
 "short" : "https://goo.gl/xF2u",
 "country" : "pk",
 "click" : 0,
 "timeCreated" : "Thu Jun 22 2017 22:51:45 GMT+0500 (PKT)",
 "__v" : 0
  },
  {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "in",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
  },
  {
    "_id" : "594c06c4d697d67eb6d5756a",
    "orginal" : "https://www.google.com/recaptcha/admin#site/338068229",
    "short" : "https://goo.gl/J7Ak12",
    "country" : "pk",
    "click" : 0,
    "timeCreated" : "Thu Jun 22 2017 23:04:52 GMT+0500 (PKT)",
    "__v" : 0
  }

    ];
  $scope.createMessage =function (){
    var modalInstance;
    modalInstance = $uibModal.open({
    size: 'lg',
    templateUrl: "partial/manageMessages.html",
    controller: function($scope) {
    $scope.action = 'create';
    $scope.settings = {
      submitted: false,
      selectedContacts: []
    };
    $scope.contacts = [
      {
        'firstName': 'umar',
        'lastName' :'rabbani',
        'contactNo': '03332927191',
        'selected' : true
      },
      {
        'firstName': 'umar',
        'lastName' :'rabbani',
        'contactNo': '03332927191'
      },
      {
        'firstName': 'umar',
        'lastName' :'rabbani',
        'contactNo': '03332927191'
      },
      {
        'firstName': 'umar',
        'lastName' :'rabbani',
        'contactNo': '03332927191'
      },
      {
        'firstName': 'umar',
        'lastName' :'rabbani',
        'contactNo': '03332927191'
      },
      {
        'firstName': 'umar',
        'lastName' :'rabbani',
        'contactNo': '03332927191'
      },
      {
        'firstName': 'umar',
        'lastName' :'rabbani',
        'contactNo': '03332927191'
      }];
    $scope.modalTitle = "Create new Message";

    $scope.labels = {
      "ok": "Create Message"
    };
    $scope.selectAll =function(){

      if ($scope.clickAll){
        angular.forEach($scope.contacts, function(value, key){
                  value.selected =true;
          });
        $scope.settings.selectedContacts = $scope.contacts;
        console.log ('contacts',  $scope.settings.selectedContacts );
      }
      else{
        $scope.settings.selectedContacts = [];
        angular.forEach($scope.contacts, function(value, key){
                  value.selected =false;
          });
      }

    }
    $scope.ok = function() {
      var isValid;
      $scope.error = {};
      isValid = true;
      $scope.settings.submitted = true;
      $scope.settngs.selected =[];
      angular.forEach($scope.contacts, function(value, key){
        if (value.selected){
          $scope.settngs.selected.push(value);
        }
        });
      if (isValid && $scope.message_form.$valid) {

          $scope.hasError = true;
          $scope.errorMessage = error_response.data.message;
        });
      }
    };
      }
      });

// ---
// generated by coffee-script 1.9.2

  }
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
