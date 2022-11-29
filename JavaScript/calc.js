function Limpar()
{
	document.getElementById('visor').value = '';
}

function Botao(valor)
{
	document.getElementById('visor').value += valor;
}
 function Apg()
 {
   	let apg = document.getElementById('visor');
  	let apagada = apg.value;
   	apg.value = apagada.substring(0, apagada.length - 1);
    //Mostrar(apg.value);
}
function Resultado()
{
	var result = 0;

	result = document.getElementById('visor').value;

	document.getElementById('visor').value = '';

	document.getElementById('visor').value = eval(result);	
}