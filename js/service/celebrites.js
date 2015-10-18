angular.module('app')
.factory('celebrites',function celebritesFactory($http){
return{
    getAll:function (){
    return $http({method:'GET', url:'celebritesJson.json'});
    },
    getOne:function(id){
        return $http({method:'GET', url:'celebritesJson.json'});
    }
}
});