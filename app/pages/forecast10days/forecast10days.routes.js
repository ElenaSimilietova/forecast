export default function routes($routeProvider) {
    'ngInject';
    $routeProvider.when('/forecast10days', {
        template: require('./forecast10days.html'),
        controller: 'Forecast10DaysController'
    });
}