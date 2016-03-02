namespace MyApp.Controllers {

    export class AdminController {
        public users;
        public search: string; //For Search Box

        constructor(adminService: MyApp.Services.AdminService) {
            this.users = adminService.getUserResource();
        }

    }

}
