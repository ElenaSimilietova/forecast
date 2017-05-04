'use strict';
import angular from 'angular';
import ngRoute from 'angular-route';

import appConfig from './app.config.js';

import home from './pages/home';
import forecast10days from './pages/forecast10days';

// Declare app level module which depends on views, and components
const appForecast = angular.module('appForecast', [
          'ngRoute',
          home,
          forecast10days
        ]);

// Module configurations
appForecast.config(appConfig);

export default appForecast.name;
