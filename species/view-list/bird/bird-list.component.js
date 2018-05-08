'use strict';

angular.
  module('birdList').
    component('birdList', {
      templateUrl: 'view-list/bird/bird-list.template.html',
      controller: ['Bird',
        function BirdListController (Bird) {
          this.species = Bird.query();
          this.orderProp = 'record';
        }
      ]
    });
