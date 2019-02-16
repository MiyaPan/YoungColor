import './button.less';

export default function () {
    return {
        restrict: 'EA',
        link: function ($scope, element) {
            element.addClass('ui-btn');
        }
    }
}