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
      $scope.currentPage = 1;
      $scope.pages = [];

      var originProductList = [],
          originNewsList = []

      $scope.pageTo = function( page ){
        var start,
            end;
        if( page <= $scope.productPage ){
          start = (page-1)*6;
          end = start+6;
          $scope.productList = originProductList.slice(start,end)
        }else{
          start = (page-$scope.productPage-1)*3;
          end = start+3;
          $scope.newsList = originNewsList.slice(start,end)
        }
        $scope.currentPage = page;
      }

      $q.all([
            $http.get("/api/bodhi/query/product.htm",{params: {"type":1}}), 
            $http.get("/api/bodhi/query/news.htm",{params: {"type":1}})])
          .then(function(res){
            var productData = res[0].data,
                newsData = res[1].data;

            if( productData.ret ){
                originProductList = productData.data.list;
                $scope.productPage = Math.ceil(productData.data.list.length/6);
            }

            if( newsData.ret ){
                originNewsList = newsData.data.list;
                $scope.newsPage = Math.ceil(newsData.data.list.length/3)
            }

            for(var i = 1;i<=$scope.newsPage+$scope.productPage;i++){
              $scope.pages.push(i);
            }
            $scope.dotlistStyle = {"margin-top":-31*$scope.pages.length/2-20+"px"}

            $scope.pageTo(1)

          })
    });

})();