window['skdb'].controller('HomeController', function ($scope:any, homeService:skdb.domain.HomeService) {

    $scope.name = 'asd';

    $scope.sayHello = function () {
        $scope.name = homeService.sayMyName($scope.name);
    };


});