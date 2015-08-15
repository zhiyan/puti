(function(){
  'use strict';


  angular.module('view-location',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/location', {
          templateUrl: 'location/location.html',
          controller: 'LocationCtrl'
        });
    })
    .controller('LocationCtrl', function ($scope) {
      $scope.changeNav("location");
      $scope.changeBg("mountain");
    });

})();