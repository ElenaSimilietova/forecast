export default function HomeController($scope, getLocationService, getForecastService) {
    'ngInject';
    $scope.forecast3Days = [];
    $scope.forecastToday = {};

    getLocationService.getLocationByIP('89.27.81.47').then(function(response) {
        var location = response;

        var city = location.data.city;
        var country = location.data.country.name;
        var country_code = location.data.country.code;

        $scope.city = city;
        $scope.country = country;
        
        // get forecast for the next 3 days
        getForecastService.getForecast('forecast', country_code, city).then(function(forecast_response) {
            var forecast = forecast_response.data.forecast.simpleforecast.forecastday;

            angular.forEach(forecast, function(value, key) {
                var item = {
                    'day' : value.date.day,
                    'month' : value.date.monthname,
                    'year' : value.date.year,
                    'weekday' : value.date.weekday_short,
                    //'temperature_high' : value.high.celsius,
                    //'temperature_low' : value.low.celsius,
                    'temperature' : (value.low.celsius > 0 ? '+' : '') + value.low.celsius + '-' + (value.high.celsius > 0 ? '+' : '') + value.high.celsius,
                    'wind' : value.avewind.kph  + '-' + value.maxwind.kph,
                    'humidity' : value.avehumidity,
                    'conditions' : value.conditions,
                    'icon_url' : value.icon_url
                };

                if (Object.keys($scope.forecastToday).length == 0) {
                    $scope.forecastToday = item;
                } else {
                    $scope.forecast3Days.push(item);
                }
                
            });
            //alert(JSON.stringify($scope.forecastToday));
            //alert(JSON.stringify(forecast_response.data.forecast.simpleforecast.forecastday));
        });
    });

    

}