function init(){
    console.log("Dom cargado!");
    $("#miformulario").validate({
        rules:{
            nombre: {
                minlength:2
            },
            apellidos: {
                minlength:2
            },
            email: {
                email: true,
            },
            mail2: {
                    equalTo: "#mail"
            },
            pass: {
                minlength: 8
            },
            pass2: {
                    equalTo: "#pass"
            }
        },
        errorClass: "has-error has-feedback"
        validClass: "has-success has-feedback"

        }
        /*messages: {
            nombre: {
                required: "Por favor, introduzca un nomre.",
                minlength: "Debe tener al menos 2 caracteres."
            },
            mail: {
                required: "Por favor, introduzca un email.",
                email: "Introduzca un email válido (ejemplo@dominio.com)."
            },
            mail2: {
                equalTo: "El email introducido no coincide."
            },
            pass2: {
                required: "Por favor, introduzca una contraseña.",
                equalTo: "La contraseña introducida no coincide."
            },
            pass: {
                required: "Por favor, repita la contraseña.",
                minlength: "La contraseña debe tener al menos 8 caracteres."
            }
        }*/
    });
   
}
$(document).ready(init)