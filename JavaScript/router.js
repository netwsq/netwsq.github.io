function Router() {
    this.routes = {};
    this.currentUrl = '';
}
Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function(){};
};
Router.prototype.refresh = function() {
    console.log(location.hash.slice(1));
    this.currentUrl = location.hash.slice(1) || '/';
    // console.log(this.currentUrl);
    if(this.currentUrl&&this.currentUrl!='/'){
        this.routes[this.currentUrl]();
    }
 
};
Router.prototype.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}
window.Router = new Router();
window.Router.init();