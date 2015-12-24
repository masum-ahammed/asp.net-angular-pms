(function(){
    'use strict';

angular.module('pms', ['ui.router','pms.client']).config(["$locationProvider",
    function($locationProvider) {
        $locationProvider.html5Mode(false);
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
            console.log('bootstraping..');
        }
    ]);
    angular.element(document).ready(function () {
        angular.bootstrap(document, ["pms"]);
    });

})();
(function () {
    'use strict';

    angular.module('pms.client', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state("client", {
                url:'/',
                controller: 'clientController',
                controllerAs: 'vm',
                templateUrl: "js/app/client/client.html"
               
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
        console.log('client controller');
        activate();

        function activate() { }
    }
})();
