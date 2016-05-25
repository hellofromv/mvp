angular.module('doggiepedia.breeds', [])

.controller('BreedController', function($scope, Breeds) {
  $scope.breedsList = [];
  $scope.clicked = '';

  $scope.getBreeds = function() {
    Breeds.getBreeds()
      .then(function(response) {
        $scope.breedsList = response;
      });
  };

  $scope.checkClick = function(dog) {
    $scope.clicked = dog;
  };

  $scope.checkIfSame = function(dog) {
    return dog === $scope.clicked;
  };

  $scope.getBreeds();
});