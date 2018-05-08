'use strict';

angular.
  module('insectList').
    component('insectList', {
      templateUrl: 'view-list/insect/insect-list.template.html',
      controller: ['Insect',
        function InsectListController (Insect) {
          this.species = Insect.query();
          this.orderProp = 'record';
        }
      ]
    });
