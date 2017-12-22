var colors = {
  color1: 'rgba(235, 246, 255, 1)',
  color2: 'rgba(255, 182, 104, 1)',
  color3: 'rgba(255, 135, 135, 1)',
  color4: 'rgba(134, 173, 214, 1)',
  color5: 'rgba(147, 144, 212, 1)'
}

app.controller('mainController', ['$scope', function($scope) {

  $scope.gradient = {};

  $scope.sections = [
    {
      title: 'Logo',
      gradient: {background: `linear-gradient(36deg, ${colors.color1}, ${colors.color4})`}
    },
    {
      title: 'Typography',
      gradient: {background: `linear-gradient(36deg, ${colors.color4}, ${colors.color3})`}
    },
    {
      title: 'Color Palette',
      gradient: {background: `linear-gradient(36deg, ${colors.color3}, ${colors.color2})`}
    },
    {
      title: 'Imagery',
      gradient: {background: `linear-gradient(36deg, ${colors.color2}, ${colors.color5})`}
    },
    {
      title: 'Story',
      gradient: {background: `linear-gradient(36deg, ${colors.color5}, ${colors.color1})`}
    }
  ];

  $scope.setGradient = (section)=> {
    $scope.gradient = section.gradient;
  }
}]);
