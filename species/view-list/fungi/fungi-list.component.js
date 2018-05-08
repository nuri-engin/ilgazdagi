'use strict';

angular.
  module('fungiList').
    component('fungiList', {
      templateUrl: 'view-list/fungi/fungi-list.template.html',
      controller: ['Fungi',
        function FungiListController (Fungi) {
          this.species = Fungi.query();
          this.orderProp = 'record';
        }
      ]
    });
