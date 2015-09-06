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

      if(/^\d*$/.test($scope.id)){
        $http.get("/api/bodhi/query/newsDetail.htm",{params:{"id":$scope.id}})
             .success(function(res){
              $scope.data = res.data;
              $scope.data.body = $sce.trustAsHtml($scope.data.body);
         })
      }else{
        $scope.article = "/data/article/"+$scope.id+".html";
      }



      $scope.view = 0;

      $scope.show = function(index){
        $scope.view = index;
      }

    });

})();