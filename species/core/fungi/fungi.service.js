'use strict';

angular.
 module('coreFungi.fungi').
  factory('Fungi', ['$resource',
    function ($resource) {
      return $resource('dataset/fungi/:fungiId.json', {}, {
        query: {
          method: 'GET',
          params: {fungiId: 'fungi'},
          isArray: true
        }
      });
    }
  ]);
