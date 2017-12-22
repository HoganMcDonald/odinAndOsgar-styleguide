var colors = {
  color1: 'rgba(235, 246, 255, 1)',
  color2: 'rgba(255, 182, 104, 1)',
  color3: 'rgba(255, 135, 135, 1)',
  color4: 'rgba(134, 173, 214, 1)',
  color5: 'rgba(147, 144, 212, 1)'
}

app.controller('mainController', ['$scope', function($scope) {

  $scope.gradient = 'grad1';

  $scope.sections = [
    {
      title: 'Logo',
      gradient: 'grad1'
    },
    {
      title: 'Typography',
      gradient: 'grad2'
    },
    {
      title: 'Color Palette',
      gradient: 'grad3'
    },
    {
      title: 'Imagery',
      gradient: 'grad4'
    },
    {
      title: 'Story',
      gradient: 'grad5'
    }
  ];

  $scope.setGradient = (section)=> {
    $scope.gradient = section.gradient;
  }
}]);
