angular.module('lawApp', ['ngRoute']).
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/main-view', {
            templateUrl: 'main-view.html',
        }).when('/price-view', {
            templateUrl: 'price-view.html',
        }).when('/team-view', {
            templateUrl: 'team-view.html',
        }).when('/contacts-view', {
            templateUrl: 'contacts-view.html',
        }).otherwise({redirectTo: '/main-view'});

    }]);


