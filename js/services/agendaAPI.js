angular.module('pessoas').factory("agendaAPI", function($http, config){
	var _getPessoas = function(){
		return $http.get(config.baseUrl + "pessoas");
	};

	var _getPessoa = function(id){
		return $http.get(config.baseUrl + "pessoas/"  + id);
	};

	var _savePessoas = function(contato){
		return $http.post(config.baseUrl + "pessoas", contato);
	};

	var _getProfissoes = function(){
		return $http.get(config.baseUrl + "profissoes");
	};

	return {
		getPessoas: _getPessoas,
		getPessoa: _getPessoa,
		savePessoas: _savePessoas,
		getProfissoes: _getProfissoes
	};
});