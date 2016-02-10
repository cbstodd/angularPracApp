'use strict';

var app = angular
    .module('appModule', [])
    .controller('serviceCtrl', function ($scope, stringService) {
        $scope.transformString = function (input) {
            $scope.output = stringService.processString(input);
        }
    });