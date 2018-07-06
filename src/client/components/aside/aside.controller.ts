export default class {
    static $inject = ['$location'];

    public show: boolean;
    constructor(private $location) {
    }

    public redirectToPage (name) {
        if (name === 'home') {
            this.$location.path('/home');
        } else if (name === 'images') {
            this.$location.path('/images');
        }else if (name === 'projects') {
            this.$location.path('/projects');
        } else {
            this.$location.path('/contact');
        }
    }
 }