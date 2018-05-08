'use strict';

angular.
  module('coreReptile.reptile').
    factory('Reptile', ['$resource',
      function ($resource) {
        return $resource('dataset/reptile/:reptileId.json', {}, {
          query: {
            method: 'GET',
            params: {reptileId: 'reptile'},
            isArray: true
          }
        });
      }
    ]);
