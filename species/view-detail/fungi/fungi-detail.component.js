'use strict';

angular.
  module('fungiDetail').
    component('fungiDetail', {
      templateUrl: 'view-detail/fungi/fungi-detail.template.html',
      controller: ['$routeParams', 'Fungi',
      function FungiDetailController($routeParams, Fungi) {
        var self = this;
        self.species = Fungi.get({fungiId: $routeParams.fungiId},
        function(species) {
          self.setImage(species.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
