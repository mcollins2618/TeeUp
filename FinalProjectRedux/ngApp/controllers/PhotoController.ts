namespace MyApp.Controllers {

    export class PhotoController {
        public file;
        public item;
        constructor(private filepickerService, private $scope: ng.IScope) { this.item = {} }
                
        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this))
        }

            public fileUploaded(file) {
                this.file = file;
                this.item.imageUrl = this.file.url;
                this.$scope.$apply();

        }

    }

}