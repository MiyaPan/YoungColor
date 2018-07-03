import '../contact/contact.less';

export default class ContactController {
    public static $inject = ['$scope'];

    private isShowMenuAside: boolean = false;

    constructor (private $scope) {
    }

    private getPicture01 () {
        return './public/about-01.jpeg';
    }

    private getPicture02 () {
        return './public/about-02.jpeg';
    }

    private getPicture03 () {
        return './public/about-03.jpeg';
    }

    private showMenuAside () {
        this.isShowMenuAside = true;
    }

    private onClose () {
        this.isShowMenuAside = false;
    }
}