import angular from 'angular';

import getLocationService from './get-location.service';

export default angular.module('get-location', [])
    .service('getLocationService', getLocationService)
    .name;