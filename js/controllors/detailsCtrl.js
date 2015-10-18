angular.module('app')

.controller('detailsCtrl',function($routeParams,$scope,celebrites){
    $scope.celeID = $routeParams.id;
    $scope.cele = {}
    celebrites.getOne($scope.celeID)
    .then(function(response){
          //success
        var celebrites = response.data.celebrites;
        celebrites.forEach(function(i){
            if(i.id == $routeParams.id){
                $scope.cele = i;
            }
        });
      
    },function(response){
    
       //failed
    });


});