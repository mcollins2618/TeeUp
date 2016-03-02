namespace MyApp.Controllers {



    export class ScoreListController {
        public scores;
        public search: string; //For Search Box

        constructor(scoreService: MyApp.Services.ScoreService) {
            this.scores = scoreService.listScores();
        }

    }

    export class ScoreAddController {
        public loaded;
        public scoreToAdd;
        constructor(private scoreService: MyApp.Services.ScoreService, private $location: ng.ILocationService) {
        }


        addScore() {
            this.loaded = false;
            this.scoreService.saveScore(this.scoreToAdd).then(() => {
                this.loaded = true;
                this.$location.path("/scores")
            });

        }

        cancelAdd() {
            this.$location.path("/scores");
        }
    }

    export class ScoreEditController {
        public scoreToEdit;

        constructor(private scoreService: MyApp.Services.ScoreService, private $location: ng.ILocationService, $routeParams: ng.route.IRouteParamsService) {
            console.log($routeParams['id']);
            this.scoreToEdit = this.scoreService.getScore($routeParams["id"]);
            
        }
        

        editScore() {
            console.log(this.scoreToEdit);
            this.scoreService.saveScore(this.scoreToEdit).then(() => {
                this.$location.path("/scores")
            });
        }

        cancelEdit() {
            this.$location.path("/scores");
        }
    }

    export class ScoreDeleteController {
        public scoreToDelete;

        constructor(private scoreService: MyApp.Services.ScoreService, private $location: ng.ILocationService, $routeParams: ng.route.IRouteParamsService) {
            this.scoreToDelete = scoreService.getScore($routeParams["id"]);
        }

        deleteScore() {
            this.scoreService.deleteScore(this.scoreToDelete.id).then(() => this.$location.path("/scores"));
        }

        cancelDelete() {
            this.$location.path("/scores");
        }
    }
}
