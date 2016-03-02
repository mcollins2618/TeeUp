namespace MyApp.Controllers {

    export class CourseDetailsController {
        public courses; //Will contain a list of products
        constructor(
            private $uibModal: angular.ui.bootstrap.IModalService,
            private coursesService: MyApp.Services.CoursesService) {

            this.courses = coursesService.getCourses();
        }
        //open a modal by calling $uibModal.open()
        public openModal(id: number) {
            this.$uibModal.open({
                //Specify which template to load
                templateUrl: '/ngApp/views/modal/course-details.html',
                controller: CourseModalController,
                controllerAs: 'vm',
                resolve: {
                    productId: () => id
                }

            });
        }
    }

    class CourseModalController {
        public course;
        constructor(
            private courseId,
            private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private coursesService: MyApp.Services.CoursesService) {

            //load this product as soon as the modal opens
            this.course = coursesService.getCourse(courseId);
        }

        public ok() {
            this.$uibModalInstance.close();
        }


    }
}