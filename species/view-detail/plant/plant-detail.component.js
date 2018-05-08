'use strict';

angular.
  module('plantDetail').
    component('plantDetail', {
      templateUrl: 'view-detail/plant/plant-detail.template.html',
        controller: ['$routeParams', 'Plant',
          function PlantDetailController($routeParams, Plant) {
            var self = this;
            self.species = Plant.get({plantId: $routeParams.plantId},
            function(species) {
              self.setImage(species.images[0])
            });

            self.setImage = function setImage(imageUrl) {
              self.mainImageUrl = imageUrl;
            };
          }
        ]
    });
