(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", lunchCheckController);

  lunchCheckController.$inject = ["$scope"];

  function lunchCheckController($scope) {
    var c = this;
    c.lunchInput = "";
    c.resultMessage = "";
    var lunchHolder = [];

    c.checkLunch = function () {
      //convert input into array

      lunchHolder = c.lunchInput != "" ? c.lunchInput.split(",") : [];

      if (lunchHolder.length === 0) {
        c.resultMessage = "Please enter data first";
      } else if (lunchHolder.length <= 3) {
        c.resultMessage = "Enjoy!";
      } else {
        c.resultMessage = "Too much!";
      }
    };
  }
})();
