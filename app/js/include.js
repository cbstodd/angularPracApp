'use strict';

var app = angular
    .module('initModule', [])
    .controller('initCtrl', function ($scope) {
      var languages = [
        { name: 'Ruby',       proficient: 1, years: 2.5 },
        { name: 'Python',     proficient: 2, years: 0.5 },
        { name: 'JavaScript', proficient: 1, years: 1.2 },
        { name: 'jQuery',     proficient: 1, years: 1.5 },
        { name: 'Ember',      proficient: 2, years: 0.1 },
        { name: 'Angular',    proficient: 3, years: 0.2 }
      ];

      var countries = [
        {
          name: 'United States',
          cities: [
            { name: 'Baltimore' },
            { name: 'Boca Raton' }
          ]
        },
        {
          name: 'England',
          cities: [
            { name: 'London' },
            { name: 'Manchester' }
          ]
        },
        {
          name: 'Italy',
          cities: [
            { name: 'Rome' },
            { name: 'Naples' }
          ]
        }
      ];

      //Calls languages on the initCtrl.
      $scope.languages = languages;

      //Path from indexs root
      $scope.languagesTable = 'views/languagesTable.html';
      $scope.languagesList = 'views/languagesList.html';
      $scope.countries = countries;
    });
