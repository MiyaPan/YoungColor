import listApi from '_apis/list.api';
import '../main/main.less';

export default class MainController {
    public static $inject = ['$scope'];

    private isShowMenuAside: boolean = false;

    constructor (private $scope) {
    }

    private getMainPicture01 () {
        return './public/main-picture-01';
    }

    private getMainPicture02 () {
        return './public/main-picture-02';
    }

    private getMainPicture03 () {
        return './public/main-picture-03';
    }

    private showMenuAside () {
        this.isShowMenuAside = true;
    }

    private onClose () {
        this.isShowMenuAside = false;
    }
}