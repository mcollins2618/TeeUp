var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(accountService, $location) {
                this.accountService = accountService;
                this.$location = $location;
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map