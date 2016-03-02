var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ScoreListController = (function () {
            function ScoreListController(scoreService) {
                this.scores = scoreService.listScores();
            }
            return ScoreListController;
        })();
        Controllers.ScoreListController = ScoreListController;
        var ScoreAddController = (function () {
            function ScoreAddController(scoreService, $location) {
                this.scoreService = scoreService;
                this.$location = $location;
            }
            ScoreAddController.prototype.addScore = function () {
                var _this = this;
                this.loaded = false;
                this.scoreService.saveScore(this.scoreToAdd).then(function () {
                    _this.loaded = true;
                    _this.$location.path("/scores");
                });
            };
            ScoreAddController.prototype.cancelAdd = function () {
                this.$location.path("/scores");
            };
            return ScoreAddController;
        })();
        Controllers.ScoreAddController = ScoreAddController;
        var ScoreEditController = (function () {
            function ScoreEditController(scoreService, $location, $routeParams) {
                this.scoreService = scoreService;
                this.$location = $location;
                console.log($routeParams['id']);
                this.scoreToEdit = this.scoreService.getScore($routeParams["id"]);
            }
            ScoreEditController.prototype.editScore = function () {
                var _this = this;
                console.log(this.scoreToEdit);
                this.scoreService.saveScore(this.scoreToEdit).then(function () {
                    _this.$location.path("/scores");
                });
            };
            ScoreEditController.prototype.cancelEdit = function () {
                this.$location.path("/scores");
            };
            return ScoreEditController;
        })();
        Controllers.ScoreEditController = ScoreEditController;
        var ScoreDeleteController = (function () {
            function ScoreDeleteController(scoreService, $location, $routeParams) {
                this.scoreService = scoreService;
                this.$location = $location;
                this.scoreToDelete = scoreService.getScore($routeParams["id"]);
            }
            ScoreDeleteController.prototype.deleteScore = function () {
                var _this = this;
                this.scoreService.deleteScore(this.scoreToDelete.id).then(function () { return _this.$location.path("/scores"); });
            };
            ScoreDeleteController.prototype.cancelDelete = function () {
                this.$location.path("/scores");
            };
            return ScoreDeleteController;
        })();
        Controllers.ScoreDeleteController = ScoreDeleteController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=ScoreController.js.map