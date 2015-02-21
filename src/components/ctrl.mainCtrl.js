var data = require('./../data/session1.js');

module.exports = function($scope, hotkeys) {

  $scope.screen = 0;
  $scope.panelVisible = true;

  hotkeys.add({
      combo: 'v',
      description: 'This one goes to 11',
      callback: function() {
        $scope.panelVisible = !$scope.panelVisible;
        console.log($scope.panelVisible);
      }
  });

  hotkeys.add({
      combo: 'right',
      description: 'Goes forward',
      callback: function() {
        $scope.screen = $scope.screen + 1;
        $scope.current = $scope.data.screens[$scope.screen];
        console.log($scope.current);
      }
  });

  hotkeys.add({
      combo: 'left',
      description: 'Goes back',
      callback: function() {
        $scope.screen = $scope.screen - 1;
        $scope.current = $scope.data.screens[$scope.screen];
        console.log($scope.current);
      }
  });

  $scope.data = data;
  $scope.current = $scope.data.screens[$scope.screen];
  $scope.variables = $scope.data.variables;

  $scope.pointActivator  = function() {
    $scope.pointActive = !$scope.pointActive;
    console.log($scope.pointActive);
  }
}
