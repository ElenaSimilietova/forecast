module.exports = function($locationProvider, $routeProvider) {
    'ngInject';

    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
}
