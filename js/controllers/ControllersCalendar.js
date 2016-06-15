angular.module('pessoas').controller('ControllersCalendar', function($scope, $http, agendaAPI){
     $scope.hide = false;

     var carregarPessoas = function(){
         agendaAPI.getPessoas().success(function(data){
               $scope.pessoas = data;
         }).error(function(data, status){
               $scope.message = "Aconteceu um problema: " + data;
         });
     };

     var carregarProfissoes = function(){
         agendaAPI.getProfissoes().success(function(data){
               $scope.profissoes = data;
         }).error(function(data, status){
               $scope.message = "Aconteceu um problema: " + data;
         });
     };

     $scope.inserirPessoa = function(pessoa){
        console.log(pessoa);
        agendaAPI.savePessoas(pessoa).success(function (data){
               console.log(data);
               delete $scope.pessoa;
               carregarPessoas();
        });
     };

     $scope.inserirProfissao = function(profissao){
        $http.post("http://localhost:3000/profissoes", profissao).success(function(data){
            delete $scope.profissao;
            carregarProfissoes();
        });
     };

    $scope.apagarPessoa = function(pessoas){
        $scope.pessoas = pessoas.filter(function(pessoa){
            if (!pessoa.selecionado) return pessoa;
        });
     };

     $scope.pessoaEstaSelecionada = function(pessoas){
        return pessoas.some(function(pessoa){
            return pessoa.selecionado;
        });
     };

     $scope.ordenarPor = function(campo){
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
     };

     carregarPessoas();
     carregarProfissoes();
});