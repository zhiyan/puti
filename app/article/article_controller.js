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

      var url = /^\d*$/.test($scope.id) ? "/api/bodhi/query/product.htm" : "data/article.json";

      $http.get(url,{params:{"id":$scope.id}})
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