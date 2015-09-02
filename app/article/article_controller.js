(function(){
  'use strict';


  angular.module('view-article',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/article/:id', {
          templateUrl: 'article/article.html',
          controller: 'ArticleCtrl'
        });
    })
    .controller('ArticleCtrl', function ($scope,$http,$routeParams,$sce) {

      $scope.id = $routeParams.id;

      $scope.changeNav("");

      $scope.changeBg("mountain");

      $http.get("data/article.json",{params:{"id":$scope.id}})
           .success(function(res){
            $scope.data = res.data;
            $scope.data.content = $sce.trustAsHtml($scope.data.content);
           })


      $scope.view = 0;

      $scope.show = function(index){
        $scope.view = index;
      }

    });

})();