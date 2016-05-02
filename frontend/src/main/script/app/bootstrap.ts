'use strict';

window['skdb'] = angular.module('app', []);

angular.element(document).on('ready', function () {
    angular.bootstrap(document, ['app']);
});