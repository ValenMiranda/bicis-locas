function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password").value;
	var seleccion = document.getElementsByClassName("form-control").value;
	var twitter = document.getElementById("input-social");

	if(nombre == 0 || apellido == 0 || correo == 0 || pass == 0 || seleccion == 0 || twitter == 0){
		var errorNombre = document.createElement("span");
		errorNombre.innerHTML = "Escribe tu " + ;
		document.getElementById("").appendChild(errorNombre);
		return false;
	}
}