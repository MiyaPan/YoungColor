import listApi from '../../../apis/list.api';
import '../projects/projects.less';

export default class ProjectsController {
    public static $inject = ['$scope'];

    private list: any[] = [];

    private itemCountOfEachLine: number = 6;
    private isShowMenuAside: boolean = false;

    constructor (private $scope) {
        this.init();
    }

    private init () {
        this.reload();
    }

    private reload () {
        return listApi.getProjectList().then((data) => {
            this.list = data;
            this.$scope.$apply();
        });
    }

    private getItemClass (picture) {
        const lineIndex = this.list.indexOf(picture) % this.itemCountOfEachLine;
        if (lineIndex === 0) {
            return 'middle-picture-first-line';
        } else if (lineIndex === 1) {
            return 'small-picture-first-line';
        } else if (lineIndex === 2) {
            return 'big-picture-first-line';
        } else if (lineIndex === 3) {
            return 'small-picture-second-line';
        } else if (lineIndex === 4) {
            return 'big-picture-second-line';
        } else {
            return 'middle-picture-second-line';
        }
    }

    private getProjectsList () {
        return './public/projects';
    }

    private showMenuAside () {
        this.isShowMenuAside = true;
    }

    private onClose () {
        this.isShowMenuAside = false;
    }
}