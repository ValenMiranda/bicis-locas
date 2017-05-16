function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password").value;
	var seleccion = document.getElementsByClassName("form-control").value;
	var twitter = document.getElementById("input-social").value;

	if(nombre == ""){
		var nombreVacio = document.getElementsByClassName('name-container input-box')[0];
        var span = document.createElement('span');
        var requiredName = document.createTextNode("Debe ingresar su nombre");
        nombreVacio.appendChild(span);
        span.appendChild(requiredName);
	}

	if(apellido == ""){
		var apellidoVacio = document.getElementsByClassName('lastname-container input-box')[0];
        var span = document.createElement('span');
        var requiredLast = document.createTextNode("Debe ingresar su apellido");
        apellidoVacio.appendChild(span);
        span.appendChild(requiredLast);
        var expReg = /^[a-zA-Z ]+$/;
		}else(!expReg.test(apellido)){
			return true;	
		}
	}

	if(correo == ""){
		var correoVacio = document.getElementsByClassName('email-container input-box')[0];
        var span = document.createElement('span');
        var requiredCorreo = document.createTextNode("Debe ingresar su correo");
        correoVacio.appendChild(span);
        span.appendChild(requiredCorreo);
	}

	if(pass == ""){
		var passVacio = document.getElementsByClassName('form-group input-box')[0];
        var span = document.createElement('span');
        var requiredPass = document.createTextNode("Debe ingresar una contraseña");
        passVacio.appendChild(span);
        span.appendChild(requiredPass);
	}
}