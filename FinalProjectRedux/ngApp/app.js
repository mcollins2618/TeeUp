var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ngRoute', 'ngResource', 'angular-filepicker']).config(function ($routeProvider, $locationProvider, filepickerProvider) {
        filepickerProvider.setKey('ANzRFywYxScWJAhrxSwtZz');
        $routeProvider
            .when('/', {
            templateUrl: '/ngApp/views/login-2.html',
            controller: MyApp.Controllers.LoginController,
            controllerAs: 'controller'
        })
            .when('/courses', {
            templateUrl: '/ngApp/views/courses.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .when('/login', {
            templateUrl: '/ngApp/views/login-2.html',
            controller: MyApp.Controllers.LoginController,
            controllerAs: 'controller'
        })
            .when('/admin', {
            templateUrl: '/ngApp/views/adminPage.html',
            controller: MyApp.Controllers.AdminController,
            controllerAs: 'vm'
        })
            .when('/register', {
            templateUrl: '/ngApp/views/register.html',
            controller: MyApp.Controllers.RegisterController,
            controllerAs: 'vm'
        })
            .when('/externalLogin', {
            templateUrl: '/ngApp/views/externalLogin.html',
            controller: MyApp.Controllers.ExternalLoginController,
            controllerAs: 'controller'
        })
            .when('/externalRegister', {
            templateUrl: '/ngApp/views/externalRegister.html',
            controller: MyApp.Controllers.ExternalRegisterController,
            controllerAs: 'controller'
        })
            .when('/confirmEmail', {
            templateUrl: '/ngApp/views/confirmEmail.html',
            controller: MyApp.Controllers.ConfirmEmailController,
            controllerAs: 'controller'
        })
            .when('/scores', {
            templateUrl: '/ngApp/views/scores.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/add', {
            templateUrl: '/ngApp/views/add.html',
            controller: MyApp.Controllers.ScoreAddController,
            controllerAs: 'vm'
        })
            .when('/edit/:id', {
            templateUrl: '/ngApp/views/edit.html',
            controller: MyApp.Controllers.ScoreEditController,
            controllerAs: 'vm'
        })
            .when('/delete/:id', {
            templateUrl: '/ngApp/views/delete.html',
            controller: MyApp.Controllers.ScoreDeleteController,
            controllerAs: 'vm'
        })
            .when('/photo', {
            templateUrl: '/ngApp/views/photo.html',
            controller: MyApp.Controllers.PhotoController,
            controllerAs: 'vm'
        })
            .when('/blackgold', {
            templateUrl: '/ngApp/views/coursescoreview/blackgold.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/coyotehills', {
            templateUrl: '/ngApp/views/coursescoreview/coyotehills.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/fullerton', {
            templateUrl: '/ngApp/views/coursescoreview/fullerton.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/monarchbeach', {
            templateUrl: '/ngApp/views/coursescoreview/monarchbeach.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/oakcreek', {
            templateUrl: '/ngApp/views/coursescoreview/oakcreek.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/pellicanhill', {
            templateUrl: '/ngApp/views/coursescoreview/pellicanhill.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/sanjuanhills', {
            templateUrl: '/ngApp/views/coursescoreview/sanjuanhills.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/strawberryfarms', {
            templateUrl: '/ngApp/views/coursescoreview/strawberryfarms.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/oakcreekdetails', {
            templateUrl: '/ngApp/views/details/oakcreekdetails.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .when('/pellicanhilldetails', {
            templateUrl: '/ngApp/views/details/pellicanhilldetails.html',
            controller: MyApp.Controllers.ScoreListController,
            controllerAs: 'vm'
        })
            .otherwise({
            redirectTo: '/ngApp/views/login-2.html'
        });
        $locationProvider.html5Mode(true);
    });
    angular.module('MyApp').factory('authInterceptor', function ($q, $window, $location) {
        return ({
            request: function (config) {
                config.headers = config.headers || {};
                var token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login-2');
                }
                return response || $q.when(response);
            }
        });
    });
    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map