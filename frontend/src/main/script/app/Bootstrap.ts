'use strict';

import { UpgradeAdapter } from '@angular/upgrade';

window['skdb'] = angular.module('app', []);

let upgradeAdapter = new UpgradeAdapter();

angular.element(document).on('ready', function () {
    upgradeAdapter.bootstrap(document, ['app']);
});