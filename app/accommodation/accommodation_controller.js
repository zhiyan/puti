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

      $scope.id = $routeParams.id || 5;

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
            if($scope.list.length){
              $scope.renderImages( 0 )
            }else{
              $scope.renderImages(null,true)
            }
          }
        })
      }

      $scope.renderImages = function( index, empty ){

        var tpl,
            $container = angular.element("#slider-container");

        if(!empty){
          tpl = $compile('<div class="flexslider" flexslider> <ul class="slides"> <li ng-repeat="one in images" ng-init="slider($last)"> <img ng-src="{{one}}-home"/> </li> </ul> </div>');

          $scope.room = index;
          $scope.images = $scope.list[index].imgList;
          
          $container.html(tpl($scope));
        }else{
          tpl = '<div class="room-empty">暂无房型，敬请期待</div>';
          $container.html(tpl)
        }

      }

      $scope.getData($scope.id);

      
    });

})();