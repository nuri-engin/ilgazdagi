'use strict';

angular.
  module('coreInsect.insect').
    factory('Insect', ['$resource',
      function ($resource) {
        return $resource('dataset/insect/:insectId.json', {}, {
          query: {
            method: 'GET',
            params: {insectId: 'insect'},
            isArray: true
          }
        });
      }
    ]);
