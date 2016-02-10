'use strict';

//var app = angular.module('app', []);
//
//app.controller('myCtrl', function ($scope) {
//  var employee = {
//    firstName: 'Colin',
//    lastName: 'Stodd',
//    gender: 'Male'
//  };
//  $scope.employee = employee;
//});

//<!-- ##-= OR chaining =-## -->

//var app = angular
//  .module('app', [])
//  .controller('myCtrl', function ($scope) {
//          var employee = {
//              firstName: 'Colin',
//              lastName: 'Stodd',
//              gender: 'Male'
//          };
//     $scope.employee = employee
//  });

var app = angular
    .module('appModule', [])
      //$http({
      //  method: 'GET',
      //  url: '/someUrlOrDatabaseName' })
      //    .then(function successCallback(response) {
      //      // this callback will be called asynchronously
      //      // when the response is available
      //    }, function errorCallback(response) {
      //      // called asynchronously if an error occurs
      //      // or server returns response with an error status.
      //    })

    .controller('myCtrl', function ($scope) {
      var country = {
        name: "United States",
        capital: "Washington, D.C",
        image: "images/male_avatar.png"
      };
      $scope.country = country;
      //Need to call the function
    })

    .controller('twoWayCtrl', function ($scope) {
      $scope.message = "Simple two-way data binding!"
      })

    .controller('employeeCtrl', function ($scope) {
      var employee = {
        fName: "Amanda",
        lName: "Tinder",
        gender: "Female"
      }
      $scope.employee = employee;
    });
