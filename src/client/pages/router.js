import MainController from './main/mian.controller';
import * as MainTemplate from './main/mian.html';
import AboutController from './about/about.controller';
import * as AboutTemplate from './about/about.html';
import ContactController from './contact/contact.controller';
import * as ContactTemplate from './contact/contact.html';


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
            title: 'Contact',
            controller: ContactController,
            template: ContactTemplate,
            controllerAs: 'contact',
            bindToController: true
        })
        .otherwise({
            redirectTo: '/home'
        });
}