import 'angular';
import 'angular-route';
import routes from './router';
import AppCtrl from './appController';

import Aside from '../components/aside';
import Button from '../components/button';
import Logo from '../components/logo';
import Header from '../components/header';
import MenuButton from '../components/menuButton';
import SearchBox from '../components/search';

angular.module('myApp', ['ngRoute'])
    .controller('AppCtrl', AppCtrl)
    .directive('uiAside', Aside)
    .directive('uiButton', Button)
    .directive('uiLogo', Logo)
    .directive('uiHeader', Header)
    .directive('uiMenuButton', MenuButton)
    .directive('uiSearchBox', SearchBox)
    .config(routes);
