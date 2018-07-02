import controller from './aside.controller';
import * as asideTemplate from './aside.html';
import './aside.less';

export default function () {
    return {
        restrict: 'E',
        scope: {
            onClose: '&?'
        },
        template: asideTemplate,
        controller,
        controllerAs: 'vm',
        bindToController: true
    }
}