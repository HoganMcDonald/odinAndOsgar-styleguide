console.log('bundled 2');
app.controller('mainController', ['$scope', function($scope) {

  $scope.ready = ()=> {
    console.log('ready');
  }
}]);
