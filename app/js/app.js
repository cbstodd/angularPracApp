'use strict';

//var pracApp = angular.module('pracApp', []);
//
//pracApp.controller('myCtrl', function ($scope) {
//  var employee = {
//    firstName: 'Colin',
//    lastName: 'Stodd',
//    gender: 'Male'
//  };
//  $scope.employee = employee;
//});

//<!-- ##-= OR chaining =-## -->

//var pracApp = angular
//  .module('pracApp', [])
//  .controller('myCtrl', function ($scope) {
//          var employee = {
//              firstName: 'Colin',
//              lastName: 'Stodd',
//              gender: 'Male'
//          };
//     $scope.employee = employee
//  });

var pracApp = angular
    .module('pracApp', [])
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
