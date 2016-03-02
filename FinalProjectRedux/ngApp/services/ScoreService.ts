namespace MyApp.Services {

    export class ScoreService {
        private scoreResource;


    
        constructor(private $resource: ng.resource.IResourceService) {
            this.scoreResource = $resource('/api/scores/:id');
        }

        public listScores() {
            return this.scoreResource.query();
        }

        public getScore(id) {
            return this.scoreResource.get({ id: id });
        }

        public saveScore(score) {
            return this.scoreResource.save(score).$promise;
        }
        public deleteScore(id: number) {
            return this.scoreResource.delete({ id: id }).$promise;
        }

    }
    angular.module("MyApp").service("scoreService", ScoreService);
}



