'use strict';

angular.
  module('insectDetail').
    component('insectDetail', {
      templateUrl: 'view-detail/insect/insect-detail.template.html',
        controller: ['$routeParams', 'Insect',
          function InsectDetailController($routeParams, Insect) {
            var self = this;
            self.species = Insect.get({insectId: $routeParams.insectId},
            function(species) {
              self.setImage(species.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
              self.mainImageUrl = imageUrl;
            };
          }
        ]
    });
