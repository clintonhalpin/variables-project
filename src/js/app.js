v'use strict';

require('./../../dist/bower_components/angular/angular.min.js');
require('./../../dist/bower_components/angular-ui-router/release/angular-ui-router.js');
require('./../../dist/bower_components/angular-hotkeys/build/hotkeys.js');

angular.module('app', [ 
    'ui.router',
    'cfp.hotkeys'
])

.controller('mainCtrl', [ '$scope', 'hotkeys', require('./../components/ctrl.mainCtrl.js')]);
