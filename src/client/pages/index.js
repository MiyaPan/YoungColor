import 'angular';
import 'angular-route';
import routes from './router';
import AppCtrl from './appController';

import Aside from '../components/aside';

angular.module('myApp', ['ngRoute'])
    .controller('AppCtrl', AppCtrl)
    .directive('uiAside', Aside)
    .config(routes);
