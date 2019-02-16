import 'angular';
import 'angular-route';
import routes from './router';
import AppCtrl from './appController';

import Aside from '../components/aside';
import Button from '../components/button';
import Logo from '../components/logo';

angular.module('myApp', ['ngRoute'])
    .controller('AppCtrl', AppCtrl)
    .directive('uiAside', Aside)
    .directive('uiButton', Button)
    .directive('uiLogo', Logo)
    .config(routes);
