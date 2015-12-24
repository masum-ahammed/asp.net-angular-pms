(function(){
    'use strict';

angular.module('pms', ['ui.router','pms.client']).config(["$locationProvider",
    function($locationProvider) {
        $locationProvider.html5Mode(true);
    }
])
.config(function($httpProvider){
  //attach auth inteceptor to http requests
  //$httpProvider.interceptors.push('AuthenticateInteceptor');
})
.run(
    ['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$state.go('client');
        }
    ]);

})();