(function(){
  'use strict';


  angular.module('header',[])
    .controller('HeaderCtrl', function ($scope) {

      $scope.hoverAccount = false;

      $scope.active = "";

      $scope.$on("changeNav",function(event,nav){
        $scope.active = nav || "";
      })

      // $scope.setHeader = function( menu ){
      //   $scope.active = menu;
      // }

    });

})();