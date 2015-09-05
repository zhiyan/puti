(function(){
  'use strict';


  angular.module('view-kitchen',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/kitchen', {
          templateUrl: 'kitchen/kitchen.html',
          controller: 'KitchenCtrl'
        });
    })
    .controller('KitchenCtrl', function ($scope,$http,$q) {
      $scope.changeNav("kitchen");

      $scope.changeBg("mountain");

      $scope.pages = [];


      $scope.productPage = 1;
      $scope.newsPage = 1;
      $scope.dotlistStyle = {};

      $scope.pageTo = function( page ){

        $q.all([
            $http.get("/api/bodhi/query/product.htm",{params: {"page":Math.min(page,$scope.productPage),"type":1}}), 
            $http.get("/api/bodhi/query/news.htm",{params: {"page":Math.max(page-$scope.productPage,1),"type":1}})])
          .then(function(res){
            var productData = res[0].data,
                newsData = res[1].data;

            $scope.currentPage = page;
            $scope.pages = [];

            if( productData.ret ){
                $scope.productList = productData.data.list;
                $scope.productPage = productData.data.pageCount;
            }

            if( newsData.ret ){
                $scope.newsList = newsData.data.list;
                $scope.newsPage = newsData.data.pageCount;
            }

            for(var i = 1;i<=$scope.newsPage+$scope.productPage;i++){
              $scope.pages.push(i);
            }
            $scope.dotlistStyle = {"margin-top":-31*$scope.pages.length/2-20+"px"}

          })

      }

      $scope.pageTo(1);
    });

})();