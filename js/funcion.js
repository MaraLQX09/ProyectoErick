function permite(elEvento, permitidos){
    var numeros = "0123456789";
    var caracteres = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    var numeros_caracteres= numeros + caracteres;
	var teclas_especiales = [8,37,39,46];		

	switch (permitidos){
		case 'num':
		permitidos = numeros;
		break;
        case 'car':
        permitidos = caracteres;
        break;
        case 'num_car':
        permitidos = numeros_caracteres;
        break;
	}

	var evento = elEvento || window.event;
	var codigoCaracter = evento.charCode || evento.keyCode;
	var caracter = String.fromCharCode(codigoCaracter);

	var tecla_especial = false;
	for(var i in teclas_especiales){
		if (codigoCaracter == teclas_especiales[i]) {
			tecla_especial = true;
			break;
		}
	}
	return permitidos.indexOf(caracter) != -1 || tecla_especial; 
}

function funcion(){
    var mail = document.getElementById("email").value;
    var dir = document.getElementById("direccion").value;
    var nombre = document.getElementById("nombre").value;
    var tel = document.getElementById("telefono").value;
    var curso = document.getElementById("curso").value;

    //E-mail
    if (mail == null || mail.length == 0 || /^\s+$/.test(mail)){
        window.alert("Ingresa un correo email");
    } else 
    //Dirección
    if(dir == null || dir.length == 0 || /^\s+$/.test(dir)){
        window.alert("Ingresa una dirección domiciliaria");
    } else
    //Nombre
    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
        window.alert("Ingresa tu nombre completo");
    } else
    //Teléfono
    if(tel == null || tel.length == 0 || /^\s+$/.test(tel)){
        window.alert("Ingresa un número telefónico");
    } else
    //Curso
    if(curso == 0){
        window.alert("Selecciona un curso")
    } else {
        window.alert("Gracias por registrarte:^)")
    }
}