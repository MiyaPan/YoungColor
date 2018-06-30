import MainController from './main/mian.controller';
import * as mainTemplate from './main/mian.html';

export default router;

router.$inject = ['$routeProvider'];

function router ($routeProvider) {
    $routeProvider
        .when('/home', {
            title: 'Project List',
            controller: MainController,
            template: mainTemplate,
            controllerAs: 'list',
            bindToController: true
        })
        .when('/about', {

        })
        .otherwise({
            redirectTo: '/home'
        });
}