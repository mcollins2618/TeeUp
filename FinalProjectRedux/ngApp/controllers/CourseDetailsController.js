var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var CourseDetailsController = (function () {
            function CourseDetailsController($uibModal, coursesService) {
                this.$uibModal = $uibModal;
                this.coursesService = coursesService;
                this.courses = coursesService.getCourses();
            }
            //open a modal by calling $uibModal.open()
            CourseDetailsController.prototype.openModal = function (id) {
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
            return CourseDetailsController;
        })();
        Controllers.CourseDetailsController = CourseDetailsController;
        var CourseModalController = (function () {
            function CourseModalController(courseId, $uibModalInstance, coursesService) {
                this.courseId = courseId;
                this.$uibModalInstance = $uibModalInstance;
                this.coursesService = coursesService;
                //load this product as soon as the modal opens
                this.course = coursesService.getCourse(courseId);
            }
            CourseModalController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return CourseModalController;
        })();
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=CourseDetailsController.js.map