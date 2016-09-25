angular
.module('MyApp', ['ngMaterial', 'ngMessages'])

.config(function($mdThemingProvider) {

    $mdThemingProvider.theme('myTheme')
        .primaryPalette('red', {
            'default': '700'
        })
        .backgroundPalette('blue');
})

.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
  
});


/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/
