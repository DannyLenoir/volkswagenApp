(function(){
 var volkswagenApp = angular.module('volkswagenapp',[]);
            
            
            volkswagenApp.controller('VolkswagenCtrl', [ '$http' , function($http){
             var vw =  this;
             vw.gegevens = [];
             $http.get('autos.json').success(function(data){
             vw.gegevens = data;
             });

            

            }]);
            
            volkswagenApp.controller('FormController',function(){
               this.gegevens={};
               var vw = this;
               vw.gegevens = [];
              /* this.addGegevens = function(gegeven) {
                gegeven.gegevens.push(this.gegeven);
                this.gegevens={};
               }*/
               this.addGegevens = function(gegeven){
                this.gegevens.datum = Date.now();
                vw.gegevens.push(this.gegeven);
                this.gegevens = {};
               }
               
                        
                    });
          
               
                
          

})();