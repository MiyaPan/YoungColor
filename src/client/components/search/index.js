import './search.less';
import template from './search.html';

Search.$inject = ['$timeout'];
export default function Search($timeout) {
    return {
        restrict: 'EA',
        template: template,
        scope: {
            model: '=',
            active: '@',
            message: '@',
            placeholder: '@',
            delay: '@',
            onEnter: '&',
            onDelay: '&',
            onClear: '&',
            onFocus: '&',
            onBlur: '&',
            mode: '@',
            autofocus: '@'
        },
        link: (scope, element, attrs) => {
            // input element
            let input = element.find('input')[0];
            // util
            function getBool(value) {
                return value === true || value === 'true' || value === '';
            }

            // initial
            scope.model = scope.model || '';
            scope.message = scope.message || '';
            scope.active = getBool(scope.active);
            scope.isExpandMode = scope.mode === 'expand';
            if (scope.autofocus === 'true') {
                input.focus();
            }

            if (scope.active) {
                input.focus();
            }
            let delay = +scope.delay >= 0 ? +scope.delay : 500;
            let activate = () => {
                scope.active = true;
                input.focus();
                element.addClass('expand');
            };
            let deactivate = () => {
                scope.active = false;
                element.removeClass('expand');
            };
            scope.inputOnClick = () => !scope.active && activate();
            scope.inputOnFocus = () => {
                if (!scope.active) {
                    activate();
                } else {
                    scope.onFocus({
                        value: scope.model,
                        type: 'focus'
                    });
                }
            };
            let deleteBlurLock = false;
            scope.inputOnBlur = () => {
                if (angular.isUndefined(attrs['noautoshrink']) && scope.active && !deleteBlurLock && scope.model.length < 1) {
                    deactivate();
                }
                scope.onBlur({
                    value: scope.model,
                    type: 'blur'
                });
            };

            scope.delete = () => {
                deleteBlurLock = true;
                scope.model = '';
                $timeout(() => {
                    let isKeepActive = false;
                    let keepActive = () => {
                        isKeepActive = true;
                    };
                    scope.onClear({keepActive: keepActive, type: 'clear'});
                    if (!isKeepActive) {
                        deleteBlurLock = false;
                        deactivate();
                    } else {
                        input.focus();
                        deleteBlurLock = false;
                    }
                }, 0);
            };
            let delayTimer;
            let lastDelayedValue;
            scope.onKeyDown = (e) => {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    scope.onEnter({
                        value: scope.model,
                        type: 'enter'
                    });
                    input.blur();
                } else {
                    if (delayTimer) {
                        $timeout.cancel(delayTimer);
                    }
                    delayTimer = $timeout(() => {
                        let isJustDeleteContent = scope.model.length < 1 && !scope.active;
                        if (!isJustDeleteContent && lastDelayedValue !== scope.model) {
                            lastDelayedValue = scope.model;
                            scope.onDelay({
                                value: scope.model,
                                type: 'delay'
                            });
                        }
                    }, delay);
                }
            }
        },
    }
}
