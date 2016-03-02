var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var CourseController = (function () {
            function CourseController($uibModal, productsService) {
                this.$uibModal = $uibModal;
                this.productsService = productsService;
                this.products = productsService.getCourses();
            }
            //open a modal by calling $uibModal.open()
            CourseController.prototype.openModal = function (id) {
                this.$uibModal.open({
                    //Specify which template to load
                    templateUrl: '/ngApp/views/modal/course-details.html',
                    controller: CourseModalController,
                    controllerAs: 'vm',
                    resolve: {
                        productId: function () { return id; }
                    }
                });
            };
            return CourseController;
        })();
        Controllers.CourseController = CourseController;
        var CourseModalController = (function () {
            function CourseModalController(courseId, $uibModalInstance, courseService) {
                this.courseId = courseId;
                this.$uibModalInstance = $uibModalInstance;
                this.courseService = courseService;
                //load this product as soon as the modal opens
                this.course = courseService.getCourse(courseId);
            }
            CourseModalController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return CourseModalController;
        })();
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=CourseController.js.map