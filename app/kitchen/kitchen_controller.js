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
            $http.get("data/product.json",{"page":Math.min(page,$scope.productPage)}), 
            $http.get("data/news.json",{"page":Math.max(page-$scope.productPage,1)})])
          .then(function(res){
            var productData = res[0].data,
                newsData = res[1].data;

            $scope.currentPage = page;
            $scope.pages = [];

            if( productData.status ){
                $scope.productList = productData.data.list;
                $scope.productPage = productData.data.pageCount;
            }

            if( newsData.status ){
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