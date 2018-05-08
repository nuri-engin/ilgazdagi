'use strict';

angular.
  module('mammalDetail').
    component('mammalDetail', {
      templateUrl: 'view-detail/mammal/mammal-detail.template.html',
      controller: ['$routeParams', 'Mammal',
        function MammalDetailController($routeParams, Mammal) {
          var self = this;
          self.species = Mammal.get({mammalId: $routeParams.mammalId},
          function(species) {
            self.setImage(species.images[0]);
          });

          self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
          };
        }
      ]
    });
