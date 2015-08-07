(function(){
  'use strict';


  angular.module('view-main',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        });
    })
    .controller('MainCtrl', function ($scope,$http) {

      $scope.changeNav("");
      $scope.changeBg("");

      $http.get("/data/home.json")
          .success(function(res){
            if(res.status){
              $scope.list = res.data;
            }
          })

      // $('.flexslider').flexslider({
      //   animation: "slide",
      //   directionNav : false
      // });
      
    });

})();