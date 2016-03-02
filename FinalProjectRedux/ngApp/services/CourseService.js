var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var CoursesService = (function () {
            function CoursesService($resource) {
                this.$resource = $resource;
                this.courseResource = $resource('/api/courses/:id');
            }
            CoursesService.prototype.getCourses = function () {
                return this.courseResource.query();
            };
            CoursesService.prototype.getCourse = function (id) {
                return this.courseResource.get({ id: id });
            };
            CoursesService.prototype.saveCourse = function (course) {
                return this.courseResource.save(course).$promise;
            };
            return CoursesService;
        })();
        Services.CoursesService = CoursesService;
        angular.module("MyApp").service("coursesService", CoursesService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=CourseService.js.map