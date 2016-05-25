angular.module('doggiepedia.services', [])

.factory('Breeds', function($http) {
  var getBreeds = function() {
    return $http({
      method: "GET",
      url: "/breeds"
    })
      .then(function(resp) {
        return resp.data;
      })
  }

  return {
    getBreeds: getBreeds
  }
});