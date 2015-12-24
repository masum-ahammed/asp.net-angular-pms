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