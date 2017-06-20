//se recuperan los datos que el usuario ingrese en los input
function guardarDatos(){
	localStorage.nombre= document.getElementById("nombre").value;
	localStorage.password= document.getElementById("password").value;
}
//