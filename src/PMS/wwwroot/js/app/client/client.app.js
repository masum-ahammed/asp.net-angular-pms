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