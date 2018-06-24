export default AppCtrl;

AppCtrl.$inject = ['$scope'];
function AppCtrl($scope) {
    initTabs();

    function initTabs() {
        const tabs = [
            {
                label: 'Project List',
                onSelect: function() {
                    window.location.href = '#/home';
                },
                isSelect: function(path) {
                    return path === '/home';
                }
            }
        ];
        topbar.tabs(tabs);
    }
}