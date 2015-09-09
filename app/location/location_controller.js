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

      $scope.currentPage = 1;
      if( typeof BMap !== "undefined" ){
        var map = new BMap.Map("map");          // 创建地图实例  
        var point = new BMap.Point(119.739643,30.409025);  // 创建点坐标  
        map.centerAndZoom(point, 15);   
        var marker = new BMap.Marker(point);        // 创建标注    
        map.addOverlay(marker);   
        map.addControl(new BMap.NavigationControl());
      }

    });

})();