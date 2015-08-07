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
        $http.get("data/product.json",{"page":$scope.currentPage})
             .success(function(res){
              if(res.status){
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
