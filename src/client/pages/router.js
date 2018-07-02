import MainController from './main/mian.controller';
import * as MainTemplate from './main/mian.html';
import AboutController from './about/about.controller';
import * as AboutTemplate from './about/about.html';

export default router;

router.$inject = ['$routeProvider'];

function router ($routeProvider) {
    $routeProvider
        .when('/home', {
            title: 'Main List',
            controller: MainController,
            template: MainTemplate,
            controllerAs: 'list',
            bindToController: true
        })
        .when('/about', {
            title: 'About',
            controller: AboutController,
            template: AboutTemplate,
            controllerAs: 'about',
            bindToController: true
        })
        .when('/project', {
            // title: 'Project List',
            // controller: MainController,
            // template: MainTemplate,
            // controllerAs: 'project',
            // bindToController: true
        })
        .when('/contact', {
            // title: 'Contact',
            // controller: AboutController,
            // template: AboutTemplate,
            // controllerAs: 'contact',
            // bindToController: true
        })
        .otherwise({
            redirectTo: '/home'
        });
}