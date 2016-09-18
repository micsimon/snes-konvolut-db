'use strict';

import { UpgradeAdapter } from '@angular/upgrade';

window['skdb'] = angular.module('app', []);

const upgradeAdapter = new UpgradeAdapter(null);

angular.element(document).on('ready', function () {
    //upgradeAdapter.bootstrap(document, ['app']);
    //upgradeAdapter.bootstrap(document.body, ['app'], {strictDi: true});
    upgradeAdapter.bootstrap(document.body, ['app'])
});

