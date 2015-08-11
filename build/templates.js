angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("about/about.html","<div class=\"about\">\n	<div class=\"pannel\">\n		<div class=\"blocks\">\n			<div class=\"block poem\" ng-show=\"view==0\"></div>\n			<div class=\"block item\" ng-repeat=\"one in items\" ng-show=\"view==($index+1)\">\n				<dl>\n					<dt>\n						<img src=\"{{one.img}}\">\n					</dt>\n					<dd>\n						<img src=\"{{one.txt}}\" class=\"txt\">\n						<p ng-repeat=\"v in one.desc\">{{v}}<a href=\"{{one.url}}\" class=\"more\" ng-if=\"$last\"></a></p>\n					</dd>\n				</dl>\n			</div>\n		</div>\n		<ul class=\"dotlist\">\n			<li>\n				<a href=\"javascript:void(0)\" ng-click=\"show(0)\" ng-class=\"{\'active\':view==0}\"></a>\n			</li>\n			<li ng-repeat=\"one in items\">\n				<a href=\"javascript:void(0)\" ng-click=\"show($index+1)\" ng-class=\"{\'active\':view==$index+1}\"></a>\n			</li>\n		</ul>\n	</div>\n</div>");
$templateCache.put("about/aboutDetail.html","detail");
$templateCache.put("accommodation/accommodation.html","<h1>住</h1>");
$templateCache.put("activity/activity.html","<div class=\"activity\">\n	<div class=\"pannel\">\n		<div class=\"blocks\">\n			<div class=\"block item\" ng-repeat=\"one in items\" ng-show=\"view==($index)\">\n				<dl>\n					<dt>\n						<img src=\"{{one.img}}\">\n					</dt>\n					<dd>\n						<img src=\"{{one.txt}}\" class=\"txt\">\n						<p ng-repeat=\"v in one.desc\">{{v}}<a href=\"{{one.url}}\" class=\"more\" ng-if=\"$last\"></a></p>\n					</dd>\n				</dl>\n			</div>\n		</div>\n		<ul class=\"dotlist\">\n			<li ng-repeat=\"one in items\">\n				<a href=\"javascript:void(0)\" ng-click=\"show($index)\" ng-class=\"{\'active\':view==$index}\"></a>\n			</li>\n		</ul>\n	</div>\n</div>");
$templateCache.put("header/header.html","<div class=\"wrap\" ng-controller=\"HeaderCtrl\">\n	<a class=\"logo\" href=\"#/\" title=\"菩提谷\"></a>\n	<ul>\n		<li>\n			<a href=\"#/about\" ng-class=\"{\'cur\': active == \'about\'}\">\n				<em>源</em>\n				<span>About Us</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/accommodation\" ng-class=\"{\'cur\': active == \'accommodation\'}\">\n				<em>住</em>\n				<span>Accommodation</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/kitchen\" ng-class=\"{\'cur\': active == \'kitchen\'}\">\n				<em>食</em>\n				<span>Kitchen</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/activity\" ng-class=\"{\'cur\': active == \'activity\'}\">\n				<em>游</em>\n				<span>Activity</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/product\" ng-class=\"{\'cur\': active == \'product\'}\">\n				<em>物</em>\n				<span>Product</span>\n			</a>\n		</li>\n		<li>\n			<a href=\"#/location\" ng-class=\"{\'cur\': active == \'location\'}\">\n				<em>如何到达</em>\n				<span>Location</span>\n			</a>\n		</li>\n	</ul>\n	<div class=\"account\" ng-mouseenter=\"hoverAccount=true\" ng-mouseleave=\"hoverAccount=false\">\n		<div class=\"account-dialog\" ng-show=\"hoverAccount\">\n			<a href=\"#/book\">房间预订<span>&gt;</span></a>\n		</div>\n	</div>\n</div>\n");
$templateCache.put("kitchen/kitchen.html","<div class=\"kitchen\">\n	<div class=\"pannel pannel-elem\">\n		<div class=\"blocks\">\n			<div class=\"block\" ng-if=\"currentPage <= productPage\">\n				<div class=\"elem\" ng-repeat=\"one in productList\">\n					<img ng-src=\"{{one.img}}\">\n					<div class=\"elem-mask\">\n						<p class=\"date\">{{one.date}}</p>\n						<h6>{{one.title}}</h6>\n						<p class=\"desc\">{{one.desc}}</p>\n					</div>\n				</div>\n			</div>\n			<div class=\"block\" ng-if=\"currentPage > productPage\">\n				<a class=\"news\" ng-repeat=\"one in newsList\" href=\"#/news/{{one.id}}\">\n					<ul class=\"date\"><li>{{one.date}}</li></ul>\n					<img ng-src=\"{{one.img}}\">\n					<h6>{{one.title}}</h6>\n					<p class=\"desc\">{{one.desc}}</p>\n				</a>\n			</div>\n		</div>\n		<ul class=\"dotlist\" ng-style=\"dotlistStyle\">\n			<li ng-repeat=\"one in pages\">\n				<a href=\"javascript:void(0)\" ng-click=\"pageTo(one)\" ng-class=\"{\'active\':currentPage==one}\"></a>\n			</li>\n		</ul>\n	</div>\n</div>");
$templateCache.put("main/main.html","<div class=\"flexslider\" flexslider>\n  <ul class=\"slides\">\n    <li ng-repeat=\"one in list\" ng-init=\"slider($last)\">\n      <img ng-src=\"{{one.url}}\"/>\n    </li>\n  </ul>\n</div>\n<div class=\"home-bar\">\n  <span class=\"icon-calendar\"></span>\n  <input type=\"text\">\n  <span class=\"icon-to\"></span>\n  <input type=\"text\">\n  <a class=\"btn\" href=\"\"><span>预定</span><em>&gt;</em> </a>\n</div>");
$templateCache.put("location/location.html","<h1>如何到达</h1>");
$templateCache.put("product/product.html","<div class=\"product\">\n	<div class=\"pannel pannel-elem\">\n		<div class=\"blocks\">\n			<div class=\"block\">\n				<div class=\"elem\" ng-repeat=\"one in list\">\n					<img ng-src=\"{{one.img}}\">\n					<div class=\"elem-mask\">\n						<p class=\"date\">{{one.date}}</p>\n						<h6>{{one.title}}</h6>\n						<p class=\"desc\">{{one.desc}}</p>\n					</div>\n				</div>\n			</div>\n		</div>\n		<ul class=\"dotlist\">\n			<li ng-repeat=\"one in pages\">\n				<a href=\"javascript:void(0)\" ng-click=\"pageTo(one)\" ng-class=\"{\'active\':currentPage==one}\"></a>\n			</li>\n		</ul>\n	</div>\n</div>");}]);