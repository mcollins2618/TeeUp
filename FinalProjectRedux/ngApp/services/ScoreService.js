var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ScoreService = (function () {
            function ScoreService($resource) {
                this.$resource = $resource;
                this.scoreResource = $resource('/api/scores/:id');
            }
            ScoreService.prototype.listScores = function () {
                return this.scoreResource.query();
            };
            ScoreService.prototype.getScore = function (id) {
                return this.scoreResource.get({ id: id });
            };
            ScoreService.prototype.saveScore = function (score) {
                return this.scoreResource.save(score).$promise;
            };
            ScoreService.prototype.deleteScore = function (id) {
                return this.scoreResource.delete({ id: id }).$promise;
            };
            return ScoreService;
        })();
        Services.ScoreService = ScoreService;
        angular.module("MyApp").service("scoreService", ScoreService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=ScoreService.js.map