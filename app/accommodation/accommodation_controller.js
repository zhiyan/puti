(function(){
  'use strict';


  angular.module('view-accommodation',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/accommodation', {
          templateUrl: 'accommodation/accommodation.html',
          controller: 'AccommodationCtrl'
        })
        // .when('/accommodation/:id', {
        //   templateUrl: 'accommodation/accommodation.html',
        //   controller: 'AccommodationCtrl'
        // });
    })
    .controller('AccommodationCtrl', function ($scope,$http,$routeParams,$compile) {

      $scope.id = $routeParams.id || 1;

      $scope.building = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

      $scope.changeNav("accommodation");
      $scope.changeBg("");

      $scope.setBuilding = function( index ){
        $scope.id = index;
        $scope.getData();
      }

      $scope.getData = function(){
        $http.get("/api/bodhi/query/rooms.htm",{params:{"id" : $scope.id}})
        .success(function(res){
          if(res.ret){
            $scope.list = res.data.list || [];
            $scope.renderImages( 0 )
          }
        })
      }

      $scope.renderImages = function( index ){

        var sliderTpl = $compile('<div class="flexslider" flexslider> <ul class="slides"> <li ng-repeat="one in images" ng-init="slider($last)"> <img ng-src="{{one}}"/> </li> </ul> </div>');

        $scope.room = index;
        $scope.images = $scope.list[index].imgList;
        
        angular.element("#slider-container").html(sliderTpl($scope));
      }

      $scope.getData($scope.id);

      
    });

})();