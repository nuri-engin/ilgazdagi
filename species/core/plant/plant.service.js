'use strict';

angular.
  module('corePlant.plant').
    factory('Plant', ['$resource',
      function($resource) {
        return $resource('dataset/plant/:plantId.json', {}, {
          query: {
            method: 'GET',
            params: {plantId: 'plant'},
            isArray: true
          }
        });
      }
    ]);
