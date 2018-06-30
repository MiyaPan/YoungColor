import listApi from '../../../apis/list.api';
import '../main/main.less';

export default class mainController {
    static $inject = ['$scope'];

    private listModel;
    private pictures: any[] = [];

    private itemCountOfEachLine: number = 6;
    private lineIndex;

    constructor (private $scope) {
        this.init();
    }

    private init () {
        this.pictures = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        this.reload();
    }

    private reload () {
        return listApi.getList('http://mongoosejs.com/docs/guide.html').then((data) => {
            console.log(data);
        })
    }

    private getItemClass (picture) {
        this.lineIndex = this.pictures.indexOf(picture) % this.itemCountOfEachLine;
        if (this.lineIndex === 0) {
            return 'middle-picture-first-line';
        } else if (this.lineIndex === 1) {
            return 'small-picture-first-line';
        } else if (this.lineIndex === 2) {
            return 'big-picture-first-line';
        } else if (this.lineIndex === 3) {
            return 'small-picture-second-line';
        } else if (this.lineIndex === 4) {
            return 'big-picture-second-line';
        } else {
            return 'middle-picture-second-line';
        }
    }

}