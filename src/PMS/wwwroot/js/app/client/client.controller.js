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
