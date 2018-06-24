import listApi from '../../../apis/list.api';

export default class mainController {
    static $inject = ['$scope'];

    private listModel;
    private count =8;

    constructor (private $scope) {
        this.init();
    }

    init () {
        this.$scope.count = 9;
        this.reload();
    }

    reload () {
        return listApi.getList('http://mongoosejs.com/docs/guide.html').then((data) => {
            console.log(data);
        })
    }
}