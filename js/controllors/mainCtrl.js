angular.module('app')

.controller('mainCtrl',function($scope,$http,celebrites){
    $scope.allData;
    
    celebrites.getAll()
    .then(function(response){
          //success
        $scope.allData = response.data;
      
    },function(response){
    
       //failed
    });

});