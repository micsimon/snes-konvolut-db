window['skdb'].controller('HomeController', ['$scope', function ($scope:any) {

    $scope.name = 'asd';

    $scope.sayHello = function () {
        $scope.name = 'Hans';
    };


}]);