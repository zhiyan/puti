(function(){
  'use strict';


  angular.module('view-accommodation',['ngRoute', 'ngDialog'])
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
    .controller('AccommodationCtrl', function ($scope,$http,$routeParams,$compile, ngDialog, $sce) {

      $scope.id = $routeParams.id || 5;

      $scope.building = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

      $scope.changeNav("accommodation");
      $scope.changeBg("");

      $scope.setBuilding = function( index ){
        $scope.id = index;
        $scope.getData();
        // $scope.title = "一号楼 丨 菩提谷彩虹店";
        // $scope.content = "菩提谷建设团队花了一年多时间，投入很大的精力和物力，在窑头山脚下做了一个“样板房”，因地处彩虹谷，称为“菩提谷”彩虹店。建设过程中，尽量保留了建筑本来的面貌，同时基本不会为了房屋去干预自然环境。大量应用土夯墙、石地板等当地材料。室内装修没有一滴油漆。所有一切的目的就是减少城市生活的痕迹。";
        // ngDialog.open({
        //    template: 'accommodation/buildingTemplate.html' ,
				// 		className: 'ngdialog-theme-default ngdialog-theme-custom',
        //     scope: $scope
        //    });

      }

      var timeOut;

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
        });
        clearTimeout(timeOut);
        timeOut = setTimeout(function(){
            $http.get("/api/bodhi/query//buildingDetail.htm",{params:{"id" : $scope.id}})
          .success(function(res){
            if(res.ret){
              $scope.title = res.data.title;
              $scope.content = $sce.trustAsHtml(res.data.content);
              ngDialog.open({
                template: 'accommodation/buildingTemplate.html' ,
                  className: 'ngdialog-theme-default ngdialog-theme-custom',
                  scope: $scope
                });
            }
            else{
                $scope.title = "一号楼 丨 菩提谷彩虹店";
                $scope.content = "菩提谷建设团队花了一年多时间，投入很大的精力和物力，在窑头山脚下做了一个“样板房”，因地处彩虹谷，称为“菩提谷”彩虹店。建设过程中，尽量保留了建筑本来的面貌，同时基本不会为了房屋去干预自然环境。大量应用土夯墙、石地板等当地材料。室内装修没有一滴油漆。所有一切的目的就是减少城市生活的痕迹。";
                ngDialog.open({
                  template: 'accommodation/buildingTemplate.html' ,
                    className: 'ngdialog-theme-default ngdialog-theme-custom',
                    scope: $scope
                  });
            }
          })
          .error(function(){
                $scope.title = "一号楼 丨 菩提谷彩虹店";
                $scope.content = "菩提谷建设团队花了一年多时间，投入很大的精力和物力，在窑头山脚下做了一个“样板房”，因地处彩虹谷，称为“菩提谷”彩虹店。建设过程中，尽量保留了建筑本来的面貌，同时基本不会为了房屋去干预自然环境。大量应用土夯墙、石地板等当地材料。室内装修没有一滴油漆。所有一切的目的就是减少城市生活的痕迹。";
                ngDialog.open({
                  template: 'accommodation/buildingTemplate.html' ,
                    className: 'ngdialog-theme-default ngdialog-theme-custom',
                    scope: $scope
                  });
          })
        }, 200);
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