import angular from 'angular';

export default function($http) {
    'ngInject';

    var self = this;
    // Service's request's schema is http://geoip.nekudo.com/api/{ip}/{language}/{type} 
    // http://geoip.nekudo.com/

    self.getLocationByIP = function(ip) {
        return $http({
            method: 'GET',
            url: `http://geoip.nekudo.com/api/${ip}/en/short`
        });
    };
}