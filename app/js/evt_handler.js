'use strict';

var app = angular
    .module('myModule', [])
    .controller('myCtrl', function($scope) {
      var technolgies = [
        { name: 'Ruby',       likes: 0, dislikes: 0 },
        { name: 'Python',     likes: 0, dislikes: 0 },
        { name: 'JavaScript', likes: 0, dislikes: 0 },
        { name: 'jQuery',     likes: 0, dislikes: 0 },
        { name: 'Ember',      likes: 0, dislikes: 0 },
        { name: 'Angular',    likes: 0, dislikes: 0 },
      ];
      $scope.technologies = technolgies;

      //Calls the anonymous myCtrl function.

      $scope.incrementLikes = function(technology) {
        technology.likes += 1;
      };

      $scope.incrementDislikes = function(technology) {
        technology.dislikes += 1;
      };

    })

    .controller('filterCtrl', function($scope) {
      var stodds = [
        { name: 'Raney',
          dateOfBirth: new Date('July 21, 1985'),
          gender: 'Female',
          salary: 60000,
        },
        { name: 'Colin',
          dateOfBirth: new Date('October 15, 1983'),
          gender: 'Male',
          salary: 67000,
        },
        { name: 'Kevin',
          dateOfBirth: new Date('June 19, 1981'),
          gender: 'Male',
          salary: 53000,
        },
        { name: 'Brian',
          dateOfBirth: new Date('December 04, 1978'),
          gender: 'Male',
          salary: 51000,
        },
        { name: 'Charlotte',
          dateOfBirth: new Date('December 21, 1985'),
          gender: 'Female',
          salary: 53000,
        },
        { name: 'Jeffrey',
          dateOfBirth: new Date('December 04, 1949'),
          gender: 'Male',
          salary: 250000,
        },
      ];
      $scope.stodds = stodds;

      // organizes employees by name by default.
      $scope.sortColumn = 'name';

    });
