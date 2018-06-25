import 'angular';
import 'angular-route';
import routes from './router';
import AppCtrl from './appController';

angular.module('myApp', ['ngRoute'])
    .controller('AppCtrl', AppCtrl)
    .config(routes);
