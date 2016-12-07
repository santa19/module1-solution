(function functionName() {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];

function LunchCheckController ($scope){
   $scope.mensaje = "";
   $scope.checkIfTooMuch = function(){
     var lunchList = $scope.lunchList;
     if(lunchList){
       var size = lunchList.split(",").length;
       if(size<4){
         $scope.mensaje = "Enjoy!";
       }else{
          $scope.mensaje = "Too much";
       }
     }else{
        $scope.mensaje = "Please enter data first";
     }
   }
};

})();
