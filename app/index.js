window.onload = function() {
    document.getElementById('ttt').onclick = function(e){
        console.log(111111,e);
    }
}

var myapp = angular.module('myapp', [

]);

myapp.controller('myCtrl', ['$scope','$rootScope',
function($scope, $rootScope) {
    $scope.list = [1,2,3,4,5,6]

}])