export default class {
    static $inject = ['$location'];
    constructor(private $location) {
    }

    public redirectToPage (name) {
        if (name === 'home') {
            this.$location.path('/home');
        } else if (name === 'about') {
            this.$location.path('/about');
        }else if (name === 'project') {
            this.$location.path('/project');
        } else {
            this.$location.path('/contact');
        }
    }
}