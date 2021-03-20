

$('#btnEnviar').on('click', function(e){
    
    var nombre = $('#nombre').val();
    var correo = $('#email').val();
    var telefono = $('#telefono').val();



    if(nombre != "" && correo != "" && $.isNumeric(telefono) && $('#cbox1').is(":checked")){
        var datos = JSON.stringify({
            telefono:telefono,
            correo: correo,
            nombre: nombre,
        });
        requestAjax('btnEnviar', datos );
    }
    else{
        alert("Llene los campos correctamente")
    }

});

function respuestaAjax(data){
    alert(data.msj);
}

function errorSucces(msj){
    alert( msj);
}

