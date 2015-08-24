(function(){
  'use strict';


  angular.module('view-order',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/order', {
          templateUrl: 'order/order.html',
          controller: 'OrderCtrl'
        })
        .when('/order/:from/:to', {
          templateUrl: 'order/order.html',
          controller: 'OrderCtrl'
        });
    })
    .controller('OrderCtrl', function ($scope,$http,$routeParams) {
      $scope.changeNav("");
      $scope.changeBg("mountain");

      var $from = angular.element("#js-date-from"),
          $to = angular.element("#js-date-to");

      var defaultFrom = moment().add(1,"days").format("YYYY-MM-DD"),
          defaultTo = moment().add(2,"days").format("YYYY-MM-DD")

      $from.val($routeParams.from || defaultFrom)
      $to.val($routeParams.to || defaultTo)


      $scope.getList = function(){
        $http.get("/data/order.json",{params:{
          "from" : $from.val(),
          "to" : $to.val()
        }})
        .success(function(res){
          if( res.status ){
            $scope.list = res.data.list;
          }
        })
      }

      angular.element("#js-submit").on("click",$scope.getList)
      
      $scope.getList();



      angular.element("#js-date-from").pickadate()
      angular.element("#js-date-to").pickadate()
    });

})();