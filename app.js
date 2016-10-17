(function(){
            
var volkswagenApp = angular.module('volkswagenapp', []);


volkswagenApp.controller('VolkswagenCtrl', ['$http', '$rootScope', function ($http, $rootScope) {
        var vw = this;
        vw.gegevens = [];
        $http.get('autos.json').success(function (data) {
            vw.gegevens = data;
        });
        $rootScope.VolksWagenAppScope = vw;
       


    }]);

volkswagenApp.controller('FormController', ['$rootScope', function ($rootScope, $http) {
        this.gegevens = {};
   
        this.addGegevens = function (gegeven) {
            debugger;
            this.gegevens.datum = Date.now();
            $rootScope.VolksWagenAppScope.gegevens.push(this.gegevens);
            this.gegevens = {};
        }
       
       

    }]);
                
          

})();
