namespace MyApp.Controllers {

    export class HomeController {
        public loginUser;
        public validationMessages;

        constructor(private accountService: MyApp.Services.AccountService, private $location: ng.ILocationService) {
            
        }
        //public login() {
        //    this.accountService.login(this.loginUser).then(() => {
        //        this.$location.path('/courses');
        //    }).catch(() => {
        //        this.$location.path('/login-2');
        //        });
        //}
    }
}