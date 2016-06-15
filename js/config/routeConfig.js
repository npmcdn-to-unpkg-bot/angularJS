angular.module('pessoas').config(function ($routeProvider){

    $routeProvider.when("/detalheContato/:id", {
        templateUrl: "js/view/detalheContato.html",
        controller : "DetalheContatoCtrl",
        resolve: {
            contato: function(agendaAPI, $route){
                return agendaAPI.getPessoa($route.current.params.id);
            }
        }
    });

    $routeProvider.when("/contatos", {
        templateUrl: "js/view/contatos.html",
        controller: "ControllersCalendar"
    });


    $routeProvider.when("/criarContato", {
        templateUrl: "js/view/criarContato.html",
        controller: "CriarContatoCtrl",
        resolve: {
            profissoes: function(agendaAPI){
                return agendaAPI.getProfissoes();
            }
        }
    });

   $routeProvider.when("/criarProfissao", {
        templateUrl: "js/view/criarProfissao.html",
        controller: "CriarProfissaoCtrl"
   });

   $routeProvider.otherwise({redirectTo: "/contatos"});
});