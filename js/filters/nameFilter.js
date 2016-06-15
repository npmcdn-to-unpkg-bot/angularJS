angular.module("pessoas").filter("nome", function (){
    return function (input){
        var listaDeNomes = input.split(" ");
        var listaDeNomesFormatados = listaDeNomes.map(function(nome){
            if(nome === "de" || nome === "da") return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return listaDeNomesFormatados.join(" ");
    };
});