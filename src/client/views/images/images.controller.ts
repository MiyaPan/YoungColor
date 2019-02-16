import listApi from '../../../apis/list.api';
import './/images.less';

export default class ImagesController {
    public static $inject = ['$scope'];

    private pictures: any[] = [];

    private itemCountOfEachLine: number = 6;
    private isShowMenuAside: boolean = false;

    constructor (private $scope) {
        this.init();
    }

    private init () {
        this.reload();
    }

    private reload () {
        listApi.getImageList().then((data) => {
            this.pictures = data;
            this.$scope.$apply();
        });
    }

    private showImageModal (picture) {
        let modal = document.querySelector('.modal') as HTMLElement;
        let modalImg = document.querySelector('.modal-content') as HTMLImageElement;
        let captionText = document.querySelector('.caption');

        modal.style.display = "block";
        modalImg.src = picture.url;
        captionText.innerHTML = picture.title;
    }

    private hideImageModal () {
        let modal = document.querySelector('.modal') as HTMLElement;
        modal.style.display = "none";
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
        return './public/images-big.jpg';
    }

    private showMenuAside () {
        this.isShowMenuAside = true;
    }

    private onClose () {
        this.isShowMenuAside = false;
    }
}