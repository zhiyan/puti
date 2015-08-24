(function(){
	'use strict';


	angular.module('puti', [ 
		'ngRoute',
		'header',
		'view-main',
		'view-order',
		'view-article',
		'view-product',
		'view-about',
		'view-accommodation',
		'view-activity',
		'view-location',
		'view-kitchen',
		'templates' 
		])
	  .config(function ($routeProvider) {

	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  })


	  $.extend($.fn.pickadate.defaults, {
		  monthsFull: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		  monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		  weekdaysFull: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
		  weekdaysShort: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
		  format: 'yyyy-mm-dd',
		  today: '今天',
		  clear: '清除',
		  close: '关闭'
		})
	  
})();