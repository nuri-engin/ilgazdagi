'use strict';

angular.
  module('birdApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/species/bird', {
        template: '<bird-list></bird-list>'
        }).
        when('/species/bird/:birdId', {
          template: '<bird-detail></bird-detail>'
        }).
        otherwise('/species/bird');
      }
    ]);

angular.
  module('fungiApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/species/fungi', {
        template: '<fungi-list></fungi-list>'
      }).
      when('/species/fungi/:fungiId', {
        template: '<fungi-detail></fungi-detail>'
      }).
      otherwise('/species/fungi');
      }
    ]);

angular.
  module('mammalApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/species/mammal', {
          template: '<mammal-list></mammal-list>'
        }).
        when('/species/mammal/:mammalId', {
          template: '<mammal-detail></mammal-detail>'
        }).
        otherwise('/species/mammal');
      }
    ]);

angular.
  module('plantApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/species/plant', {
          template: '<plant-list></plant-list>'
        }).
        when('/species/plant/:plantId', {
          template: '<plant-detail></plant-detail>'
        }).
        otherwise('/species/plant');
      }
    ]);

angular.
  module('insectApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/species/insect', {
          template: '<insect-list></insect-list>'
        }).
        when('/species/insect/:insectId', {
          template: '<insect-detail></insect-detail>'
        }).
        otherwise('/species/insect');
      }
    ]);

angular.
  module('reptileApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/species/reptile', {
          template: '<reptile-list></reptile-list>'
        }).
        when('/species/reptile/:reptileId', {
          template: '<reptile-detail></reptile-detail>'
        }).
        otherwise('/species/reptile');
      }
    ]);
