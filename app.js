(function () {
  "use strict";
  var x = 10;
  

  angular
    .module("myFirstApp", [])

    .controller("myFirstController",myFirstController)
    .controller("mySecondController",mySecondController)
    

    function myFirstController ($scope,$timeout) {
      $scope.parentValue=1;
      $scope.abc = this;
      $scope.abc.parentValue =2; 

    };

  var api = {

    'controller':function(){
      
    }
  }

    function mySecondController ($scope,$timeout) {
      $scope.parentValue=2;
      $scope.abc.parentValue=3;
      console.log($scope.parentValue);
      console.log($scope);
    };
    

    
})();
