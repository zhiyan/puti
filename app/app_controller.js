(function(){
  'use strict';

  angular.module("puti")
    .controller("appCtrl",function($scope){

      $scope.bgClass = "";

      $scope.changeNav = function( nav ){
        $scope.$broadcast("changeNav",nav);
      }

      $scope.changeBg = function( bg ){
      	$scope.bgClass = bg;
      }
    })
	.directive('flexslider', function(){

		 return {
		   link : function(scope, element, attrs) {
		   	scope.slider = function(bool){
		       if (bool) {
			       	var $flex = $(element).closest("[flexslider]"),
			       		$nav,
			       		height;
			        $flex.flexslider({
				        animation: "slide",
				        // direction: "vertical", 
				        directionNav : false
			        });
			        $nav = $flex.find(".flex-control-nav");
			        height = $nav.height()/2;
			        $nav.css("margin-top",-height)
		       }
		     }
		   }
		 };

	});

})();