window['skdb'].directive('spieleUebersicht', function () {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: `<h1>{{name}}</h1>`,
        link: function (scope:any, element:any, attrs:ng.IAttributes) {
            console.log('###', scope.name);

        }
    }
});