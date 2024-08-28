
function clearFields(){
	document.getElementById('erro').innerHTML = "";
	document.getElementById('situacao').innerHTML = "";
}

function calcularMedia(){

	
 
	var n1 = document.getElementById('campoNota1')
	var n2 = document.getElementById('campoNota2')
	var n3 = document.getElementById('campoNota3')
	var n4 = document.getElementById('campoNota4')
	var nome = document.getElementById('campoNome')


	if (nome.value == ''){
		document.getElementById('erro').innerHTML = "Favor preencher o campo Nome"
			nome.focus();			
			return false; 
	}
	else if(n1.value == ''){
		document.getElementById('erro').innerHTML = "Favor preencher o campo nota 1"
			n1.focus();			
			return false;
	}
	else if(n2.value == ''){
		document.getElementById('erro').innerHTML = "Favor preencher o campo nota 2"
			n2.focus();			
			return false;
	}
	else if(n3.value == ''){
		document.getElementById('erro').innerHTML = "Favor preencher o campo nota 3"
			n3.focus();			
			return false;
	}
	else if(n4.value == ''){
		document.getElementById('erro').innerHTML = "Favor preencher o campo nota 4"
			n4.focus();			
			return false;
	}
	
	else if(n1.value > 10 || n2.value > 10 || n3.value > 10 || n4.value > 10 || n1.value < 0 || n2.value < 0 || n3.value < 0 || n4.value < 0){
		document.getElementById("erro").innerHTML = "Há uma inconsistência no cálculo da nota, favor verificar";
	}
	else{
		var media = (parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value) + parseFloat(n4.value))/4;

		if(n1.value == ''){
			document.getElementById("erro")
		}

		if(media >=7){
			document.getElementById("situacao").style.background = "white";
			document.getElementById("situacao").style.color = "green";
			document.getElementById("situacao").innerHTML="MÉDIA: " + media + "  SITUAÇÃO: APROVADO";
			document.getElementById("erro").innerHTML = ""
			return false
		}
		else if (media < 7 && media >= 4 ){
			document.getElementById("situacao").style.background = "white";
			document.getElementById("situacao").style.color = "yellow";
			document.getElementById("situacao").innerHTML="MÉDIA: " + media + "  SITUAÇÃO: EXAME";
			document.getElementById("erro").innerHTML = ""
			return false
		}
		else {
			document.getElementById("situacao").style.background = "white";
			document.getElementById("situacao").style.color = "red";
			document.getElementById("situacao").innerHTML="MÉDIA: " + media + "  SITUAÇÃO: REPROVADO";
			document.getElementById("erro").innerHTML = ""
			return false
		}
	}		
}