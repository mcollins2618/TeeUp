namespace MyApp.Services {

    export class CoursesService {
        private courseResource; //Will contain resource connection to /api/products
        constructor(private $resource: ng.resource.IResourceService) {
            this.courseResource = $resource('/api/courses/:id');
        }


        
        public getCourses() {
            return this.courseResource.query();
        }

        public getCourse(id) {
            return this.courseResource.get({ id: id });
        }


        
        public saveCourse(course) {
            return this.courseResource.save(course).$promise;

        }

    }


    angular.module("MyApp").service("coursesService", CoursesService);

}