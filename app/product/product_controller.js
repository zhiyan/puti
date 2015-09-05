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

      $scope.pageTo = function( page ){
        $scope.currentPage = page;
        $scope.pages = [];
        var params = {
          "page":$scope.currentPage,
          "type":3
        }
        $http.get("/api/bodhi/query/product.htm",{params:params})
             .success(function(res){
              if(res.ret){
                $scope.list = res.data.list;
                for(var i = 1;i<= res.data.pageCount;i++){
                  $scope.pages.push(i);
                }
              }
             })
      }

      $scope.pageTo(1)

    }); 

})();
