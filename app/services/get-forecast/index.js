import angular from 'angular';

import getForecastService from './get-forecast.service';

export default angular.module('get-forecast', [])
    .service('getForecastService', getForecastService)
    .name;