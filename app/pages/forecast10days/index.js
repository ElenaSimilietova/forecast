'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';

import Forecast10DaysController from './forecast10Days.controller';
import routes from './forecast10days.routes';

export default angular.module('forecast10days', [ngRoute])
    .config(routes)
    .controller('Forecast10DaysController', [function() {

    }]).name;
    //.controller('Forecast10DaysController', Forecast10DaysController);