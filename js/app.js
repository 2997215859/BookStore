var routerApp = angular.module('routerApp',[
	'ui.router','BookListModule','ngGrid']);
/**
 * run在程序启动时，只会运行一次
 * 该步操作，是注入$state和$stateParams服务到root上
 * 因为整个应用都会使用到路由
 */
routerApp.run(function($rootScope,$state,$stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $state;
});


routerApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index',{
			url:'/index',
			views:{
				'':{
					templateUrl:'tpls/home.html'
				},
				'main@index':{
					templateUrl:'tpls/loginForm.html'
				}
			}
		})
		.state('booklist',{
			url:'/{bookType:[0-9]{1,4}}',
			views:{
				'':{
					templateUrl:'tpls/bookList.html'
				},
				'booktype@booklist':{
					templateUrl:'tpls/bookType.html'
				},
				'bookgrid@booklist':{
					templateUrl:'tpls/bookGrid.html'
				}
			}
		})
		.state('addbook',{
			url:'/addbook',
			templateUrl:'tpls/addBookForm.html'
		})
		.state('bookdetail',{
			url:'/bookdetail/:bookId',
			templateUrl:'tpls/bookDetail.html'
		});
});
