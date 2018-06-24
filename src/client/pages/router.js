import mainController from './main/mian.controller';
import * as mainTemplate from './main/mian.html';

export default router;

router.$inject = ['$routeProvider'];

function router ($routeProvider) {
    $routeProvider
        .when('/home', {
            title: 'Project List',
            controller: mainController,
            template: mainTemplate,
            controllerAs: 'list'
        })
        .when('/about', {

        })
        .otherwise({
            redirectTo: '/home'
        });
}