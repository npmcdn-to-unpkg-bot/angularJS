angular.module("pessoas").directive("uiAlertDir", function(){
    return {
        template: "view/alerta.html",
        replace: true,
        restrict: "AE",
        scope:{
            title:"@",
            message: "="
        }
    };

});