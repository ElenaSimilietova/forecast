import angular from 'angular';

export default function($http) {
    'ngInject';

    var self = this;
    // Service's request's schema is  
    // http://api.wunderground.com/api/432b41f46781255d/type/q/country_code/city.json
	// type - 'forecast', 'forecast10day' etc
	// country_code - 'FI', 'UA', for USA code of state, for example 'CA' for California

    self.getForecast = function(type, country_code, city) {
        return $http({
            method: 'GET',
            url: `http://api.wunderground.com/api/432b41f46781255d/${type}/q/${country_code}/${city}.json`
        });
    };
}