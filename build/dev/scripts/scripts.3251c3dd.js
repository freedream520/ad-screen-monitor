$(document).ready(function(){function a(){var a=$("#user-nav > ul").width();$("#user-nav > ul").css({width:a,"margin-left":"-"+a/2+"px"});var b=$("#content-header .btn-group").width();$("#content-header .btn-group").css({width:b,"margin-left":"-"+a/2+"px"})}$(".submenu > a").click(function(a){a.preventDefault();var b=$(this).siblings("ul"),c=$(this).parents("li"),d=$("#sidebar li.submenu ul"),e=$("#sidebar li.submenu");c.hasClass("open")?($(window).width()>768||$(window).width()<479?b.slideUp():b.fadeOut(250),c.removeClass("open")):($(window).width()>768||$(window).width()<479?(d.slideUp(),b.slideDown()):(d.fadeOut(250),b.fadeIn(250)),e.removeClass("open"),c.addClass("open"))});var b=$("#sidebar > ul");$("#sidebar > a").click(function(a){a.preventDefault();var c=$("#sidebar");c.hasClass("open")?(c.removeClass("open"),b.slideUp(250)):(c.addClass("open"),b.slideDown(250))}),$(window).resize(function(){$(window).width()>479&&(b.css({display:"block"}),$("#content-header .btn-group").css({width:"auto"})),$(window).width()<479&&(b.css({display:"none"}),a()),$(window).width()>768&&($("#user-nav > ul").css({width:"auto",margin:"0"}),$("#content-header .btn-group").css({width:"auto"}))}),$(window).width()<468&&(b.css({display:"none"}),a()),$(window).width()>479&&($("#content-header .btn-group").css({width:"auto"}),b.css({display:"block"})),$(".tip").tooltip(),$(".tip-left").tooltip({placement:"left"}),$(".tip-right").tooltip({placement:"right"}),$(".tip-top").tooltip({placement:"top"}),$(".tip-bottom").tooltip({placement:"bottom"}),$("#search input[type=text]").typeahead({source:["Dashboard","Form elements","Common Elements","Validation","Wizard","Buttons","Icons","Interface elements","Support","Calendar","Gallery","Reports","Charts","Graphs","Widgets"],items:4}),$("#style-switcher i").click(function(){$(this).hasClass("open")?($(this).parent().animate({marginRight:"-=190"}),$(this).removeClass("open")):($(this).parent().animate({marginRight:"+=190"}),$(this).addClass("open")),$(this).toggleClass("icon-arrow-left"),$(this).toggleClass("icon-arrow-right")}),$("#style-switcher a").click(function(){var a=$(this).attr("href").replace("#","");$(".skin-color").attr("href","css/unicorn."+a+".css"),$(this).siblings("a").css({"border-color":"transparent"}),$(this).css({"border-color":"#aaaaaa"})})}),angular.module("adScreenMonitor",["ngRoute","restangular","blueimp.fileupload"]).run(["Restangular","settingsService",function(a,b){a.setBaseUrl(b.getAPIService())}]).run(["fileUpload","settingsService",function(a,b){angular.extend(a.defaults,{url:b.getUploadService()})}]).config(["$httpProvider",function(a){a.defaults.useXDomain=!0,delete a.defaults.headers.common["X-Requested-With"]}]).config(["$locationProvider",function(a){a.html5Mode(!1)}]).config(["$routeProvider",function(a){a.when("/",{redirectTo:"/ad-screen"}).when("/screen-group",{templateUrl:"views/screen-group.html",controller:"ScreenGroupController"}).when("/ad-screen/:group",{templateUrl:"views/ad-screen.html",controller:"AdScreenController"}).when("/ad-screen",{templateUrl:"views/ad-screen.html",controller:"AdScreenController"}).when("/screen-ad",{templateUrl:"views/screen-ad.html",controller:"ScreenAdController"}).when("/screen-ad-edit",{templateUrl:"views/screen-ad-edit.html",controller:"ScreenAdEditController"}).when("/screen-ad-edit/:aid",{templateUrl:"views/screen-ad-edit.html",controller:"ScreenAdEditController"}).when("/ad-report",{templateUrl:"views/ad-report.html",controller:"AdReportController"}).otherwise({redirectTo:"/ad-screen"})}]),angular.module("adScreenMonitor").factory("screenGroupService",["Restangular",function(a){var b=a.all("screen-groups");return{getList:function(){return b.getList()},addItem:function(a){return b.post(a)},updateItem:function(b){var c=a.copy(b);return c.put()},getItem:function(){return{title:"",description:""}}}}]),angular.module("adScreenMonitor").factory("screenAdService",["$q","Restangular",function(a,b){var c=b.all("screen-ads");return{getList:function(){return c.getList()},addItem:function(a){return c.post(a)},updateItem:function(a){var c=b.copy(a);return c.put()},getItem:function(c){if(c){var d=b.one("screen-ads",c);return d.get()}var e=a.defer();return e.resolve({title:"",description:""}),e.promise},execute:function(a,c){var d=b.one("screen-ads",a);return d.post(c,{})}}}]),angular.module("adScreenMonitor").factory("adScreenService",["Restangular",function(a){var b=a.all("ad-screens");return{getList:function(){return b.getList()},addItem:function(a){return b.post(a)},updateItem:function(b){var c=a.copy(b);return c.put()},getItem:function(){return{title:"",description:"",group:""}}}}]),angular.module("adScreenMonitor").factory("enumService",function(){return{getSlotTypes:function(){return[{name:"carousel",description:"1#轮播位置"},{name:"fix",description:"2#固定位置"},{name:"scroll",description:"3#滚动位置"}]},getMaterielTypes:function(){return[{name:"image_4_3",description:"图片物料（宽高比4：3）",slotType:"carousel"},{name:"video_4_3",description:"MP4视频物料（宽高比4：3）",slotType:"carousel"},{name:"image_2_3",description:"图片物料（宽高比2：3）",slotType:"fix"},{name:"text",description:"文本广告（少于25字）",slotType:"scroll"}]}}}),angular.module("adScreenMonitor").factory("settingsService",["$location",function(a){var b=a.port(),c="http://113.10.167.163:8341";return 9e3===b&&(c="http://127.0.0.1:8341"),{getStaticService:function(){return c},getScreenService:function(){return[c,"ad-screen"].join("/")},getAPIService:function(){return[c,"ad-screen/api"].join("/")},getUploadService:function(){return[c,"ad-screen/api/upload"].join("/")}}}]),angular.module("adScreenMonitor").directive("datepicker",function(){return{restrict:"A",require:"?ngModel",scope:!0,link:function(a,b,c,d){if(d){var e={};e.dateFormat="yy-mm-dd";var f=function(b){a.$apply(function(){d.$setViewValue(b)})};e.onSelect=function(b,c){console.log(c),f(b),a.select&&a.$apply(function(){a.select({date:b})})},d.$render=function(){b.datepicker("setDate",d.$viewValue||"")},b.datepicker(e),console.log(c)}}}}),angular.module("adScreenMonitor").directive("datetimepicker",function(){return{restrict:"A",require:"?ngModel",scope:{select:"&"},link:function(a,b,c,d){if(d){var e={};e.dateFormat="yy-mm-dd";var f=function(b){a.$apply(function(){d.$setViewValue(b)})};e.onSelect=function(b,c){console.log(c),f(b),a.select&&a.$apply(function(){a.select({date:b})})},d.$render=function(){b.datepicker("setDate",d.$viewValue||"")},b.datetimepicker(e),console.log(c)}}}}),angular.module("adScreenMonitor").directive("jqGrid",["enumService",function(a){var b=window.$,c=window._;return{restrict:"A",link:function(d,e,f){function g(a){d.$emit("execute",{id:a,action:"start"})}function h(a){d.$emit("execute",{id:a,action:"pause"})}function i(a,b,d,e){var f=[];for(var g in b)b.hasOwnProperty(g)&&f.push([g,b[g]].join("="));var h='<a <%= attrs %> class="<%= classes %>" data-toggle="tooltip" data-placement="left" title="<%= title %>"></a>';d.push("action"),d.push("glyphicon");var i={title:e,attrs:f.join(" "),classes:d.join(" ")},j=c.template(h);a.push(j(i))}function j(a,b,c){return console.log(b),console.log(c),q.hasOwnProperty(a)?q[a]:"未定义"}function k(a,b,c){return console.log(b),console.log(c),r.hasOwnProperty(a)?r[a]:"未定义"}function l(){return function(a){return{colNames:["id","广告主题","广告位置","物料类型","开始投放","结束投放","","active"],colModel:[{name:"id",hidden:!0},{name:"title",index:"title",width:500,align:"left"},{name:"slotType",index:"slotType",width:80,align:"left",formatter:j},{name:"materielType",index:"materielType",width:170,align:"left",formatter:k},{name:"start",index:"start",width:120,align:"center"},{name:"end",index:"end",width:120,align:"center"},{name:"action",index:"action",width:60,align:"center"},{name:"active",index:"active",hidden:!0}],loadComplete:function(){var c,d,e=a.jqGrid("getDataIDs");for(c=0;c<e.length;c++){d=a.jqGrid("getRowData",e[c]);var f=[],j=d.id||"",k=d.active||0;i(f,{href:"#/screen-ad-edit/"+j},["icon-edit","icon"],"修改广告信息"),1*k?i(f,{id:j,active:"1"},["icon-pause","icon"],"暂停广告投放"):i(f,{id:j,active:"0"},["icon-play","icon"],"激活广告投放"),a.jqGrid("setRowData",e[c],{action:f.join("")})}b("a[active=0]",a).click(function(){g(b(this).attr("id"))}),b("a[active=1]",a).click(function(){h(b(this).attr("id"))}),b('a[data-toggle="tooltip"]').tooltip({})},width:"100%",height:"100%",rowNum:20,rowList:[20,30,50],viewrecords:!1,hidegrid:!1}}}var m,n,o=a.getSlotTypes(),p=a.getMaterielTypes(),q={},r={};for(m=0;m<o.length;m++)n=o[m].name,n&&(q[n]=o[m].description);for(m=0;m<p.length;m++)n=p[m].name,n&&(r[n]=p[m].description);var s=l()(e),t="";f.url&&(s.url=f.url),f.datatype&&(s.datatype=f.datatype),f.pager&&(t=s.pager=f.pager),e.jqGrid(s),t&&e.jqGrid("navGrid",t,{edit:!1,add:!1,del:!1}),d.$on("search",function(a,b){e.jqGrid("setGridParam",{url:f.url+"?screen="+b.screen+"&active="+b.active,page:1}).trigger("reloadGrid")}),d.$on("reset",function(){e.jqGrid("setGridParam",{url:f.url,page:1}).trigger("reloadGrid")})}}}]),angular.module("adScreenMonitor").directive("checkboxs",["screenGroupService","adScreenService",function(a,b){return{restrict:"A",require:"?ngModel",templateUrl:"./templates/checkboxs.html",link:function(c,d,e,f){function g(){var a,b,c,e=0;for(b=k(".checkboxs-container dl",k(d)),a=0;a<b.length;a++)c=b[a],e=k("dd input:checked",k(c)).size(),k("dt :checkbox",k(c)).prop("checked",!!e);e=k(".checkboxs-container dl dd input:checked",k(d)).size(),n.prop("checked",!!e),o.prop("checked",!!e)}function h(){var a=[];d.find(".checkboxs-container dl dd :checkbox").map(function(){this.checked&&a.push(this.value)}),f.$setViewValue(a)}console.log(e);var i,j,k=window.$,l={},m={},n=k(".checkboxs-ctrl :checkbox.checkAll",k(d)),o=k(".checkboxs-ctrl :checkbox.checkInverse",k(d));c.branches=[],c.leaves=[],a.getList().then(function(a){for(i=0;i<a.length;i++)a[i].checked=l.hasOwnProperty(a[i].id);c.branches=a}),b.getList().then(function(a){for(i=0;i<a.length;i++)a[i].checked=m.hasOwnProperty(a[i].id),l[a[i].group]=1;c.leaves=a}),c.changeScreenGroups=function(a){var b=d.find(".checkboxs-container dl[data-id="+a.id+"]"),c=b.find("dt :checkbox").prop("checked");b.find("dd :checkbox").prop("checked",c),g(),h()},c.changeAdScreens=function(a){var b=d.find(".checkboxs-container dl[data-id="+a.group+"]"),c=b.find("dd input:checked").size();b.find("dt :checkbox").prop("checked",!!c),g(),h()},n.click(function(){var a=this;d.find(".checkboxs-container :checkbox").map(function(){this.checked=a.checked}),h()}),o.click(function(){d.find(".checkboxs-container dl dd :checkbox").map(function(){this.checked=!this.checked}),g(),h()}),f.$render=function(){for(m={},j=f.$viewValue||[],i=0;i<j.length;i++)m[j[i]]=1;g()}}}}]),angular.module("adScreenMonitor").controller("MainController",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("adScreenMonitor").controller("HomeController",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("adScreenMonitor").controller("SideNavController",["$scope",function(a){var b=[{title:"广告屏管理",url:"#",active:!1,open:!1,items:[{title:"终端组",url:"#/screen-group",active:!1},{title:"终端管理",url:"#/ad-screen",active:!1},{title:"广告管理",url:"#/screen-ad",active:!1},{title:"添加广告",url:"#/screen-ad-edit",active:!1}]}];b.length&&(b[0].active=b[0].open=!0),a.items=b}]),angular.module("adScreenMonitor").controller("ScreenGroupController",["$scope","screenGroupService",function(a,b){a.state={editing:!1},a.current={item:{}},a.load=function(){b.getList().then(function(b){a.items=b})},a.showEditor=function(c){c=c||b.getItem(0),a.current.item=angular.copy(c),a.state.editing=!0},a.load()}]),angular.module("adScreenMonitor").controller("ScreenGroupEditController",["$scope","screenGroupService",function(a,b){a.submitEdit=function(){a.state.editing=!1,a.current.item.id?b.updateItem(a.current.item).then(function(){a.load()}):b.addItem(a.current.item).then(function(){a.load()})},a.cancelEdit=function(){a.state.editing=!1}}]),angular.module("adScreenMonitor").controller("AdScreenController",["$scope","$routeParams","settingsService","adScreenService",function(a,b,c,d){var e=0;b.hasOwnProperty("group")&&(e=b.group),a.state={editing:!1},a.current={item:{},group:e},a.filters={},a.screenService=c.getScreenService(),a.load=function(){d.getList().then(function(b){a.items=b})},a.showEditor=function(b){b=b||d.getItem(0),a.current.item=angular.copy(b),a.state.editing=!0},a.load()}]),angular.module("adScreenMonitor").controller("AdScreenFilterController",["$scope","screenGroupService",function(a,b){b.getList().then(function(b){if(a.items=b,b.length){var c=b[0].id;a.current.group&&(c=a.current.group),a.filters.group=c}})}]),angular.module("adScreenMonitor").controller("AdScreenEditController",["$scope","adScreenService",function(a,b){a.submitEdit=function(){a.state.editing=!1,a.current.item.group=a.filters.group,a.current.item.id?b.updateItem(a.current.item).then(function(){a.load()}):b.addItem(a.current.item).then(function(){a.load()})},a.cancelEdit=function(){a.state.editing=!1}}]),angular.module("adScreenMonitor").controller("ScreenAdController",["$scope","settingsService","screenGroupService","adScreenService","screenAdService",function(a,b,c,d,e){a.adFilters={active:"1"},a.screenFilters={},a.screenGroups=[],a.adScreens=[],a.groupScreens=[],a.jqGridUrl=[b.getAPIService(),"screen-ads"].join("/");var f=a.setGroupScreens=function(){for(var b,c=[],d=a.screenFilters.group,e=0;e<a.adScreens.length;e++)b=a.adScreens[e],d===b.group&&c.push(b);a.groupScreens=c,c.length&&(a.adFilters.screen=c[0].id)};c.getList().then(function(b){a.screenGroups=b,b.length&&(a.screenFilters.group=b[0].id),f(),d.getList().then(function(b){a.adScreens=b,f()})}),a.submitSearch=function(){a.$emit("search",a.adFilters)},a.resetList=function(){a.$emit("reset")},a.$on("execute",function(a,b){e.execute(b.id,b.action).then(function(){angular.element("#adsTable").trigger("reloadGrid")})})}]),angular.module("adScreenMonitor").controller("ScreenAdEditController",["$scope","$window","$routeParams","enumService","screenAdService",function(a,b,c,d,e){var f=0;c.hasOwnProperty("aid")&&(f=c.aid),a.current={item:{}};var g=d.getSlotTypes(),h=d.getMaterielTypes();a.materielTypes=h,a.types={slot:g,materiel:[]};var i=a.setMaterielTypes=function(b){var c,d=[];a.current.item.slotType||(a.current.item.slotType=g.length?g[0].name:""),b=b||a.current.item.slotType;for(var e=0;e<h.length;e++)c=h[e],b===c.slotType&&d.push(c);a.current.item.materielType||(a.current.item.materielType=d.length?d[0].name:""),a.types.materiel=d};i(),e.getItem(f).then(function(b){a.current.item=b,i(b.slotType)}),a.$on("fileuploaddone",function(b,c){a.current.item.path=c.result.files[0].path}),a.submitEdit=function(){var c=a.current.item;c.id?e.updateItem(c):e.addItem(c),b.location.href="#/screen-ad"}}]);