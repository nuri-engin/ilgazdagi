'use strict';

angular.
  module('reptileList').
    component('reptileList', {
      templateUrl: 'view-list/reptile/reptile-list.template.html',
      controller: ['Reptile',
        function ReptileListController (Reptile) {
          this.species = Reptile.query();
          this.orderProp = 'record';
        }
      ]
    });
