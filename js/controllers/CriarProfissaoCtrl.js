angular.module('pessoas').controller('CriarProfissaoCtrl', function($scope, $http, agendaAPI, $location){
     $scope.app = "Pessoas";
     $scope.hide = false;
     $scope.profissoes = [];

     $scope.inserirProfissao = function(profissao){
        $http.post("http://localhost:3000/profissoes", profissao).success(function(data){
            delete $scope.profissao;
        });
     };
});