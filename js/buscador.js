var app={
    resultados:[],
    resultadosFiltrados:[],
    filtraDatos:function(){
        var patron=$(this).val();
        app.filtraPorDosCampos(patron);
        console.log(app.resultadosFiltrados);
        app.presentaListado();
        
    },
    peticionAjax:function(){
        $.getJSON(
            "AQUI URL",
        function(datos){
            app.resultados=datos;
            app.resultadosFiltrados=datos;
            console.log(app.resultados);
            app.presentaListado();
            $("#buscador").click(app.filtraDatos);
        })
        .fail(function(){
            console.log("error");
        });  
    },
    init:function(){
        console.log("Dom cargado");
        app.peticionAjax();
    }
}
$(document).ready(app.init);