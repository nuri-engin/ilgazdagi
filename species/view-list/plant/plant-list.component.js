'use strict';

angular.
  module('plantList').
    component('plantList', {
      templateUrl: 'view-list/plant/plant-list.template.html',
      controller: ['Plant',
        function PlantListController (Plant) {
          this.species = Plant.query();
          this.orderProp = 'record';
        }
      ]
    });
