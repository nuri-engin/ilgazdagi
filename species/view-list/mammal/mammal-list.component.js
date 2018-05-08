'use strict';

angular.
  module('mammalList').
    component('mammalList', {
      templateUrl: 'view-list/mammal/mammal-list.template.html',
      controller: ['Mammal',
        function MammalListController (Mammal) {
          this.species = Mammal.query();
          this.orderProp = 'record';
        }
      ]
    });
