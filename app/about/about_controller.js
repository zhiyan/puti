(function(){
  'use strict';


  angular.module('view-about',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/about', {
          templateUrl: 'about/about.html',
          controller: 'AboutCtrl'
        })
        .when('/about/:id', {
          templateUrl: 'about/aboutDetail.html',
          controller: 'AboutDetailCtrl'
        });
    })
    .controller('AboutCtrl', function ($scope,$http) {

      $scope.changeNav("about");

      $scope.changeBg("mountain");

      $http.get("data/about.json")
           .success(function(res){
            $scope.items = res.list;
           })


      $scope.view = 0;

      $scope.show = function(index){
        $scope.view = index;
      }

    })
     .controller('AboutDetailCtrl', function ($scope) {
      $scope.changeNav("about");
    });

})();