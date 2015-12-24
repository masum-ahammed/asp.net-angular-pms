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
(function () {
    'use strict';

    angular.module('pms.client', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state("client", {
                controller: 'clientController',
                controllerAs: 'vm',
                templateUrl: "client.html",
                template: "<ui-view/>"
            });
        

    });
})();
(function () {
    'use strict';

    angular
        .module('pms.client')
        .controller('clientController', clientController);

    clientController.$inject = ['$location']; 

    function clientController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'clientController';

        activate();

        function activate() { }
    }
})();
