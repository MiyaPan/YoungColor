import '../contact/contact.less';

export default class ContactController {
    public static $inject = ['$scope'];

    private isShowMenuAside: boolean = false;

    constructor (private $scope) {
    }

    private getPicture01 () {
        return './public/images-01.jpeg';
    }

    private showMenuAside () {
        this.isShowMenuAside = true;
    }

    private onClose () {
        this.isShowMenuAside = false;
    }
}