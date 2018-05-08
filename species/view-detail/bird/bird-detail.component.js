'use strict';

angular.
  module('birdDetail').
    component('birdDetail', {
      templateUrl: 'view-detail/bird/bird-detail.template.html',
        controller: ['$routeParams', 'Bird',
          function BirdDetailController($routeParams, Bird) {
            var self = this;
            self.species = Bird.get({birdId: $routeParams.birdId},
            function(species) {
              self.setImage(species.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
              self.mainImageUrl = imageUrl;
            };
          }
        ]
    });
