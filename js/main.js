
var boton=document.getElementById("boton");
var input=document.getElementById("mensaje");
var lista=document.getElementById("lista");

boton.addEventListener("click", onButtonClick);

function onButtonClick()
{
	agregarMensaje();
}
function agregarMensaje()
{
	var mensaje=input.value;
	var item =document.createElement("li");
	var span=document.createElement("span");

	item.innerHTML =mensaje;
	
	input.value="";
	input.focus();

	lista.appendChild(item);

	lista.addEventListener("click", onItemClick);
	//lista.innerHTML += "<li>" + mensaje + "</li>";
}
function onItemClick(evt)
{
	console.log(evt.target);
	evt.target.parentNode.removeChild(evt.target);
}