//se recuperan los datos que el usuario ingrese en los input
function guardarDatos(){
	localStorage.nombre = document.getElementById("nombre").value;
	localStorage.password = document.getElementById("password").value;
}
//con la siguiente función se imprimiran los datos en pantalla si son completados de lo contrario retornara un alert
function recuperarDatos(){
	if((localStorage.nombre != undefined) && (localStorage.password != undefined)){
		document.getElementById("datos").innerHTML = "Nombre : " + localStorage.nombre + "<br/> Password : " + localStorage.password;		
	}else{
		document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
	}
}


