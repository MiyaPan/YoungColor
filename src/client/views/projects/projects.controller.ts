import listApi from '../../../apis/list.api';
import '../projects/projects.less';

export default class ProjectsController {
    public static $inject = ['$scope', '$location'];

    private list: any[] = [];
    private params: string;
    private isShowMenuAside: boolean = false;

    constructor (private $scope, private $location) {
        this.init();
    }

    private init () {
        this.reload();
    }

    private reload () {
        listApi.getProjectList(this.params).then((data) => {
            this.list = data;
            this.$scope.$apply();
        });
    }

    public showDetail (project) {
        this.$location.path('/detail/' + project._id);
        window.scrollTo(0, 0)
    }

    private showMenuAside () {
        this.isShowMenuAside = true;
    }

    private onClose () {
        this.isShowMenuAside = false;
    }
}