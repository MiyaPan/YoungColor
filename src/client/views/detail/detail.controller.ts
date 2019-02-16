import listApi from '../../../apis/list.api';
import '../detail/detail.less';

export default class DetailController {
    public static $inject = ['$scope', '$routeParams', '$location'];

    private isShowMenuAside: boolean = false;
    public project: object = null;

    constructor (private $scope, private $routeParams, private $location) {
        const id = this.$routeParams.id;

        listApi.getProjectDetail(id).then((data) => {
            this.project = data[0];
            this.$scope.$apply();
        });
    }

    private back () {
        this.$location.path('/projects');
    }

    private getDetailPicture () {
        return './public/mainPicture';
    }

    private showMenuAside () {
        this.isShowMenuAside = true;
    }

    private onClose () {
        this.isShowMenuAside = false;
    }
}