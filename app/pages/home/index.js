'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';

import getLocationService from '../../services/get-location/get-location.service';
import getForecastService from '../../services/get-forecast/get-forecast.service';

import HomeController from './home.controller';
import routes from './home.routes';

export default angular.module('home', [ngRoute])
    .config(routes)
    .service('getLocationService', getLocationService)
    .service('getForecastService', getForecastService)
    .controller('HomeController', HomeController)
    .name;
