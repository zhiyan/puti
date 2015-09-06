angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("about/about.html","<div class=\"about\">\n	<div class=\"pannel\">\n		<div class=\"blocks\">\n			<div class=\"block poem\" ng-show=\"view==0\"></div>\n			<div class=\"block item\" ng-repeat=\"one in items\" ng-show=\"view==($index+1)\">\n				<dl>\n					<dt>\n						<img src=\"{{one.img}}\">\n					</dt>\n					<dd>\n						<h5>{{one.txt}}</h5>\n						<h6>{{one.eng}}</h6>\n						<p ng-repeat=\"v in one.desc\">{{v}}<a href=\"{{one.url}}\" class=\"more\" ng-if=\"$last\"></a></p>\n					</dd>\n				</dl>\n			</div>\n		</div>\n		<ul class=\"dotlist\">\n			<li>\n				<a href=\"javascript:void(0)\" ng-click=\"show(0)\" ng-class=\"{\'active\':view==0}\"></a>\n			</li>\n			<li ng-repeat=\"one in items\">\n				<a href=\"javascript:void(0)\" ng-click=\"show($index+1)\" ng-class=\"{\'active\':view==$index+1}\"></a>\n			</li>\n		</ul>\n	</div>\n</div>");
$templateCache.put("about/aboutDetail.html","detail");
$templateCache.put("accommodation/accommodation.html","<!-- <div class=\"flexslider\" flexslider>\n  <ul class=\"slides\">\n    <li ng-repeat=\"one in images\" ng-init=\"slider($last)\">\n      <img ng-src=\"{{one.url}}\"/>\n    </li>\n  </ul>\n</div> -->\n\n<div id=\"slider-container\"></div>\n\n<ul class=\"room-bar\">\n	<li ng-repeat=\"one in list\" ng-click=\"renderImages($index)\" ng-class=\"{\'cur\':$index == room }\">{{one.name}}</li>\n</ul>\n\n<ul class=\"building-bar\">\n	<li ng-repeat=\"one in building\" class=\"building-{{one}}\" ng-class=\"{\'cur\':$index == id-1}\" ng-click=\"setBuilding(one)\"></li>\n</ul>\n");
$templateCache.put("activity/activity.html","<div class=\"activity\">\n	<div class=\"pannel\">\n		<div class=\"blocks\">\n			<div class=\"block item\" ng-repeat=\"one in items\" ng-show=\"view==($index)\">\n				<dl>\n					<dt>\n						<img src=\"{{one.img}}\">\n					</dt>\n					<dd>\n						<h5>{{one.txt}}</h5>\n						<h6>{{one.eng}}</h6>\n						<p ng-repeat=\"v in one.desc\">{{v}}<a href=\"#/article/{{one.id}}\" class=\"more\" ng-if=\"$last\"></a></p>\n					</dd>\n				</dl>\n			</div>\n		</div>\n		<ul class=\"dotlist\">\n			<li ng-repeat=\"one in items\">\n				<a href=\"javascript:void(0)\" ng-click=\"show($index)\" ng-class=\"{\'active\':view==$index}\"></a>\n			</li>\n		</ul>\n	</div>\n</div>");
$templateCache.put("article/article.html","<div class=\"article\">\n    <div class=\"pannel\" ng-class=\"id\">\n        <div class=\"block\">\n            <div class=\"article-item\" ng-if=\"!article\">\n                <h1 class=\"title\">{{data.title}}</h1>\n                <p class=\"desc\">{{data.createDate}}</p>\n                <div class=\"content\" ng-bind-html=\"data.body\">\n                </div>\n            </div>\n            <div class=\"article-item article-static\" ng-include=\"article\" ng-if=\"article\">\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("header/header.html","<div class=\"wrap\" ng-controller=\"HeaderCtrl\">\n	<a class=\"logo\" href=\"#/\" title=\"菩提谷\"></a>\n	<ul>\n		<li>\n			<a href=\"#/about\" ng-class=\"{\'cur\': active == \'about\'}\">\n				<em>源</em>\n				<span>About Us</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/accommodation\" ng-class=\"{\'cur\': active == \'accommodation\'}\">\n				<em>住</em>\n				<span>Accommodation</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/kitchen\" ng-class=\"{\'cur\': active == \'kitchen\'}\">\n				<em>食</em>\n				<span>Kitchen</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/activity\" ng-class=\"{\'cur\': active == \'activity\'}\">\n				<em>游</em>\n				<span>Activity</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/product\" ng-class=\"{\'cur\': active == \'product\'}\">\n				<em>讯</em>\n				<span>News</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/location\" ng-class=\"{\'cur\': active == \'location\'}\">\n				<em>如何到达</em>\n				<span>Location</span>\n			</a>\n		</li>\n	</ul>\n	<div class=\"account\" ng-mouseenter=\"hoverAccount=true\" ng-mouseleave=\"hoverAccount=false\">\n		<div class=\"account-dialog\" ng-show=\"hoverAccount\">\n			<a href=\"#/order\">房间预订<span>&gt;</span></a>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("kitchen/kitchen.html","<div class=\"kitchen\">\n	<div class=\"pannel pannel-elem\">\n		<div class=\"blocks\">\n			<div class=\"block\" ng-if=\"currentPage <= productPage\">\n				<div class=\"elem\" ng-repeat=\"one in productList\">\n					<img ng-src=\"{{one.imgUrl}}-product\">\n					<div class=\"elem-mask\">\n						<p class=\"date\">{{one.createDate}}</p>\n						<h6>{{one.title}}</h6>\n						<p class=\"desc\">{{one.content}}</p>\n					</div>\n				</div>\n			</div>\n			<div class=\"block\" ng-if=\"currentPage > productPage\">\n				<a class=\"news\" ng-repeat=\"one in newsList\" href=\"#/article/{{one.id}}\">\n					<ul class=\"date\"><li>{{one.createDate}}</li></ul>\n					<img ng-src=\"{{one.imgUrl}}-news\">\n					<h6>{{one.title}}</h6>\n					<p class=\"desc\">{{one.content}}</p>\n				</a>\n			</div>\n		</div>\n		<ul class=\"dotlist\" ng-style=\"dotlistStyle\">\n			<li ng-repeat=\"one in pages\">\n				<a href=\"javascript:void(0)\" ng-click=\"pageTo(one)\" ng-class=\"{\'active\':currentPage==one}\"></a>\n			</li>\n		</ul>\n	</div>\n</div>");
$templateCache.put("location/location.html","<div class=\"location\">\n    <div class=\"pannel\">\n    	<div class=\"blocks\">\n	        <div class=\"block location-map-1\" ng-show=\"currentPage==1\">\n	        	<div id=\"map\" class=\"map\"></div>\n	        </div>\n	        <div class=\"block location-map-2\" ng-show=\"currentPage==2\"></div>\n	        <div class=\"block location-map-3\" ng-show=\"currentPage==3\"></div>\n    	</div>\n	    <ul class=\"dotlist\">\n			<li>\n				<a href=\"javascript:void(0)\" ng-click=\"currentPage=1\" ng-class=\"{\'active\':currentPage==1}\"></a>\n			</li>\n			<li>\n				<a href=\"javascript:void(0)\" ng-click=\"currentPage=2\" ng-class=\"{\'active\':currentPage==2}\"></a>\n			</li>\n			<li>\n				<a href=\"javascript:void(0)\" ng-click=\"currentPage=3\" ng-class=\"{\'active\':currentPage==3}\"></a>\n			</li>\n		</ul>\n    </div>\n</div>\n");
$templateCache.put("main/main.html","<div class=\"flexslider\" flexslider>\n  <ul class=\"slides\">\n    <li ng-repeat=\"one in list\" ng-init=\"slider($last)\">\n      <img ng-src=\"{{one.imgUrl}}-home\"/>\n    </li>\n  </ul>\n</div>\n<div class=\"home-bar\">\n  <span class=\"icon-calendar\"></span>\n  <input type=\"text\" id=\"js-date-from\">\n  <span class=\"icon-to\"></span>\n  <input type=\"text\" id=\"js-date-to\">\n  <a class=\"btn\" href=\"javascript:void(0)\" id=\"js-submit\"><span>预定</span><em>&gt;</em> </a>\n</div>");
$templateCache.put("order/order.html","<div class=\"order\">\n    <div class=\"pannel\">\n        <div class=\"order-head\">\n        	<div class=\"order-filter\">\n        		  <span class=\"icon-calendar\"></span>\n        		  <span class=\"txt\">入住时间:</span>\n				  <input type=\"text\" id=\"js-date-from\">\n				  <span class=\"txt\">离店日期:</span>\n				  <input type=\"text\" id=\"js-date-to\">\n				  <a class=\"btn\" href=\"javascript:void(0)\" id=\"js-submit\"><span>查询</span><em>&gt;</em> </a>\n        	</div>\n        </div>\n        <div class=\"order-body\">\n        	<table>\n        		<tr ng-repeat=\"one in list\">\n        			<td width=\"80\">\n        				<img src=\"{{one.imgUrl}}\">\n        			</td>\n        			<td class=\"title\">{{one.title}}</td>\n        			<td width=\"160\">{{one.desc}}</td>\n        			<td width=\"160\">&yen;{{one.price}}</td>\n        			<td class=\"btn-td\" ng-if=\"!one.isDisabled\">\n        				<a class=\"btn\" target=\"_blank\" href=\"one.url\"><span>预定</span><em>&gt;</em> </a>\n        			</td>\n        			<td class=\"btn-td\" ng-if=\"one.isDisabled\">\n        				<span class=\"btn disabled\"><span>预定</span><em>&gt;</em> </span>\n        			</td>\n        		</tr>	\n        	</table>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("product/product.html","<div class=\"product\">\n	<div class=\"pannel pannel-elem\">\n		<div class=\"blocks\">\n			<div class=\"block\">\n				<a class=\"news\" ng-repeat=\"one in list\" href=\"#/article/{{one.id}}\">\n					<ul class=\"date\"><li>{{one.createDate}}</li></ul>\n					<img ng-src=\"{{one.imgUrl}}-news\">\n					<h6>{{one.title}}</h6>\n					<p class=\"desc\">{{one.content}}</p>\n				</a>\n			</div>\n		</div>\n		<ul class=\"dotlist\">\n			<li ng-repeat=\"one in pages\">\n				<a href=\"javascript:void(0)\" ng-click=\"pageTo(one)\" ng-class=\"{\'active\':currentPage==one}\"></a>\n			</li>\n		</ul>\n	</div>\n</div>");}]);