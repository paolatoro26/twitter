
var lista=document.getElementById("lista");

function agregarTarea()
{
	var input=document.getElementById("mensaje");
	if(input.value.length != 0)
	{
		var	item=document.createElement("li");
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type","checkbox");
		var	span=document.createElement("span");
		span.innerHTML=input.value;
		var iTacho= document.createElement("i");
		iTacho.className="fa-trash , pull-right";
		iTacho.id="tachin"	;
		item.appendChild(checkbox);
		item.appendChild(span);
		item.appendChild(iTacho);
		lista.appendChild(item);		
		iTacho.addEventListener("click", eliminarItem);
		checkbox.addEventListener("click", tachar);
		input.value="";
		input.focus();
	}
	else
		alert("Por favor, ingrese tarea valida")
}

	function eliminarItem(evt)
	{
		var li=evt.target.parentNode;
		lista.removeChild(li);
	}

	function tachar(evt)
	{
	var check=evt.target;
	if(check.checked)
	{
		check.nextSibling.setAttribute("style","text-decoration: line-through");
	}
	else
	{
		check.nextSibling.setAttribute("style","text-decoration: none");
	}	
}