(function(){
  'use strict';


  angular.module('view-main',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        });
    })
    .controller('MainCtrl', function ($scope,$http) {

      $scope.changeNav("");
      $scope.changeBg("");

      $http.get("/api/bodhi/query/home.htm")
          .success(function(res){
            var list = [];
            if(res.ret){
              $.each(res.data,function(i,v){
                if(!!v.imgUrl && v.imgUrl !== "#" ){
                  list.push(v)
                }
              })
              $scope.list = list;
            }
          })

      angular.element("#js-date-from").pickadate()
      angular.element("#js-date-to").pickadate()

      // pickadate插件对angular有影响，只能用jq方式，原因待查
      angular.element("#js-submit").on("click",function(){
        var from = $("#js-date-from").val(),
            to = $("#js-date-to").val();
        if( !!from && !!to){
          window.location.href="#/order/"+from+"/"+to
        }
      })


      // $('.flexslider').flexslider({
      //   animation: "slide",
      //   directionNav : false
      // });
      
    });

})();