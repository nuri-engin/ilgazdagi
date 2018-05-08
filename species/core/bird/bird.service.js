'use strict';

angular.
  module('coreBird.bird').
    factory('Bird', ['$resource',
      function($resource) {
        return $resource('dataset/bird/:birdId.json', {}, {
          query: {
            method: 'GET',
            params: {birdId: 'bird'},
            isArray: true
          }
        });
      }
    ]);
