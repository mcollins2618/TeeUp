namespace MyApp.Controllers {

    export class CourseController {
        public products; //Will contain a list of products
        constructor(
            private $uibModal: angular.ui.bootstrap.IModalService,
            private productsService: MyApp.Services.CoursesService) {

            this.products = productsService.getCourses();
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
            private courseService: MyApp.Services.CoursesService) {

            //load this product as soon as the modal opens
            this.course = courseService.getCourse(courseId);
        }

        public ok() {
            this.$uibModalInstance.close();
        }
    }
}