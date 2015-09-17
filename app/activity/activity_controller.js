(function(){
  'use strict';


  angular.module('view-activity',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/activity', {
          templateUrl: 'activity/activity.html',
          controller: 'ActivityCtrl'
        });
    })
    .controller('ActivityCtrl', function ($scope,$http) {

      $scope.changeNav("activity");

      $scope.changeBg("mountain");

      $scope.currentPage = 1;
      // $http.get("data/about.json")
      //      .success(function(res){
      //       $scope.items = res.list;
      // })


      // $scope.view = 0;

      // $scope.show = function(index){
      //   $scope.view = index;
      // }

    });

})();