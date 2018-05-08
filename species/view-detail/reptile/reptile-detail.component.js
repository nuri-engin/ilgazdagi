'use strict';

angular.
  module('reptileDetail').
    component('reptileDetail', {
      templateUrl: 'view-detail/reptile/reptile-detail.template.html',
        controller: ['$routeParams', 'Reptile',
          function ReptileDetailController($routeParams, Reptile) {
            var self = this;
            self.species = Reptile.get({reptileId: $routeParams.reptileId},
            function(species) {
              self.setImage(species.images[0])
            });

            self.setImage = function setImage(imageUrl) {
              self.mainImageUrl = imageUrl;
            };
          }
        ]
    });
