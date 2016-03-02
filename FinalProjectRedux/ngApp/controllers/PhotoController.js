var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var PhotoController = (function () {
            function PhotoController(filepickerService, $scope) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.item = {};
            }
            PhotoController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            PhotoController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.item.imageUrl = this.file.url;
                this.$scope.$apply();
            };
            return PhotoController;
        })();
        Controllers.PhotoController = PhotoController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=PhotoController.js.map