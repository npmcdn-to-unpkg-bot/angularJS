angular.module('pessoas')
.controller('DetalheContatoCtrl', function($scope, $routeParams, contato){
    $scope.contato = contato.data;
});