angular.module('pessoas').controller('CriarContatoCtrl', function($scope, $http, agendaAPI, $location){
     $scope.hide = false;
     $scope.pessoas = [];
     $scope.profissoes = [];

     $scope.inserirPessoa = function(pessoa){
        console.log(pessoa);
        agendaAPI.savePessoas(pessoa).success(function (data){
               console.log(data);
               delete $scope.pessoa;
               $location.path("/contatos");
        });
     };

});