import listApi from '../../../apis/list.api';
import '../main/main.less';

export default class mainController {
    public static $inject = ['$scope'];

    private listModel;
    private pictures: any[] = [];

    private itemCountOfEachLine: number = 6;
    private isShowMenuAside: boolean = false;

    constructor (private $scope) {
        this.init();
    }

    private init () {
        // this.pictures = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        this.reload();
    }

    private reload () {
        return listApi.getList().then((data) => {
            this.pictures = data;
            this.$scope.$apply();
        });
    }

    private getItemClass (picture) {
        const lineIndex = this.pictures.indexOf(picture) % this.itemCountOfEachLine;
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

    private getMainPicture () {
        return './public/mainPicture';
    }

    private showMenuAside () {
        this.isShowMenuAside = true;
    }
}