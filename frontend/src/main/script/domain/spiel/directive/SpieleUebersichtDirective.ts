window['skdb'].directive('spieleUebersicht', function (spieleDataService:skdb.domain.spiele.SpieleDataService) {
    return {
        restrict: 'E',
        scope: {},
        template: `<div>
                        <h1>Spieleübersicht</h1>
                        <button ng-click="ladeAlleSpiele()">Lade alle Spiele</button>
                        <table ng-hide="spiele.length === 0">
                            <thead>
                                <td>Name</td>
                                <td>Beschreibung</td>
                                <td>ean</td>
                            </thead>
                            <tr ng-repeat="spiel in spiele">
                                <td>{{spiel.name}}</td>
                                <td>{{spiel.desc}}</td>
                                <td>{{spiel.ean}}</td>
                            </tr>
                        </table>
                    </div>`,
        link: function (scope:any, instanceElement:ng.IAugmentedJQuery, instanceAttributes:ng.IAttributes, controller:{}, transclude:ng.ITranscludeFunction) {
            scope.spiele = [];

            console.log('asd', scope.spiele);

            scope.ladeAlleSpiele = function () {
                spieleDataService.getAlleSpiele().then(function (spiele:skdb.domain.spiele.Spiel[]) {
                    scope.spiele = spiele;
                });
            };
        }
    }
});