(function(){
  'use strict';


  angular.module('view-product',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/product', {
          templateUrl: 'product/product.html',
          controller: 'ProductCtrl'
        });
    })
    .controller('ProductCtrl', function ($scope,$http) {
      $scope.changeNav("product");

      $scope.changeBg("mountain");

      $scope.currentPage = 1;

      $scope.params = {
          "page":$scope.currentPage,
          "type":3
        }

      $scope.pages = [];

      var originList = [];

      $http.get("/api/bodhi/query/news.htm",{params:$scope.params})
             .success(function(res){
              if(res.ret){
                originList = res.data.list;
                for(var i = 1;i<= res.data.list.length/3+1;i++){
                  $scope.pages.push(i);
                }
                $scope.pageTo(1);
              }
             })

      $scope.pageTo = function( page ){
        var start = (page-1)*3,
            end = start+3;
        $scope.list = originList.slice(start,end);
        $scope.currentPage = page;
      }

    }); 

})();
