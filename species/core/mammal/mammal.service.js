'use strict';

angular.
  module('coreMammal.mammal').
    factory('Mammal', ['$resource',
      function($resource) {
        return $resource('dataset/mammal/:mammalId.json', {}, {
          query: {
            method: 'GET',
            params: {mammalId: 'mammal'},
            isArray: true
          }
        });
      }
    ]);
