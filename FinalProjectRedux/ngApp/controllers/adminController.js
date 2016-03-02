var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var AdminController = (function () {
            function AdminController(adminService) {
                this.users = adminService.getUserResource();
            }
            return AdminController;
        })();
        Controllers.AdminController = AdminController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=adminController.js.map