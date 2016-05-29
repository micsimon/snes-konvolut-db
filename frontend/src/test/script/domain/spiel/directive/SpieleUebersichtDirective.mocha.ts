describe.only('SpieleUebersichtDirective', function () {

    var compiledElement:JQuery;
    var scope:any;
    var compile:ng.ICompileService;

    beforeEach(function () {
        angular.mock.module('app');
        inject(function (_$compile_, _$rootScope_) {
            scope = _$rootScope_.$new();
            compile = _$compile_;
        });
    });

    it('inital werden keine Spiele angezeigt', function () {
        compileElement();

        chai.expect(compiledElement.find('table').hasClass('ng-hide'), 'Tablle muss die Klasse ng-hide besitzen').to.be.true;
    });

    //it('sind Spiele vorhanden, dann werden diese in einer Tabelle angezeigt', function () {
    //scope.spiele = [new skdb.domain.spiele.Spiel(1, "name1", "desc1"),
    //    new skdb.domain.spiele.Spiel(2, "name2", "desc2"),
    //    new skdb.domain.spiele.Spiel(3, "name3", "desc3")];

    //compileElement();

    //chai.expect(compiledElement.find('table').hasClass('ng-hide'), 'Tablle darf die Klasse ng-hide nicht besitzen').to.be.false;
    //chai.expect(compiledElement.find('table').children().length, 'es müssen vier Elemente enthalten sein').to.be.equal(4);
    //chai.expect(compiledElement.find('table:nth-child(1)').prop("tagName")).to.be.equal('THEAD');
    //chai.expect(compiledElement.find('table:nth-child(2)')).to.be.equal('THEAD');
    //});

    function compileElement() {
        compiledElement = compile('<spiele-uebersicht></spiele-uebersicht>')(scope);
        scope.$digest();
    }

});