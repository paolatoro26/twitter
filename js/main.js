
var lista=document.getElementById("lista");
var input=document.getElementById("mensaje");
var boton=document.getElementById("boton");


boton.addEventListener("click", onButtonClick);

function onButtonClick()
{
	agregarTarea();
}

function agregarTarea()
{
	var tarea=input.value;
	var vacio=input.value;
	var	item=document.createElement("li");
	var	enlace=document.createElement("a");
		contenido=document.createTextNode(tarea); 
	

		input.value="";
		input.focus();

		lista.appendChild(item);

		lista.addEventListener("click", onItemClick);
		//lista.innerHTML += "<li>" + mensaje + "</li>";

			
	
	if(vacio===""){
		input.setAttribute("placeholder","Agrega tarea valida");
		input.style.border ="solid 3px red";
		return false;
		}else{
			input.setAttribute("placeholder","Añade tu tarea nueva");
			input.style.border="solid 3px green";
		}

	enlace.appendChild(contenido);
	enlace.setAttribute("href","#")
	item.appendChild(enlace);

}

function onItemClick(evt)
{
	console.log(evt.target);
	evt.target.parentNode.removeChild(evt.target);
}


