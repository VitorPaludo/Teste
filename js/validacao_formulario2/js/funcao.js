function calculo() {
  var escolha = document.getElementById("escolha").value;
  switch (escolha) {
    case '1':
      var num = prompt('Informe um número');
      var r = Math.sqrt(num);
      document.getElementById('resultado').innerHTML = 'O resultado é ' + r
      break;
    case '2':
      var num1 = prompt('Informe o primeiro  número');
      var num2 = prompt('Informe o segundo  número');
      var r = Math.max(num1, num2);
     //
      document.getElementById('resultado').innerHTML = 'O maior número é ' + r
      break;
    case '3':
      var base = prompt('Informe a base');
      var expoente = prompt('Informer o expoente');
      var r = Math.pow(base, expoente);
     
      document.getElementById('resultado').innerHTML = 'O resultado é ' + r
      break;

    case '4':
      var num1 = prompt('Informe o primeiro número');
      var num2 = prompt('Informe o segundo número');
      var r = parseInt(num1) + parseInt(num2);
   
      document.getElementById('resultado').innerHTML = 'O resultado é ' + r
      break;

    case '5':
      var frase = prompt('Digite uma frase');
      document.getElementById('resultado').innerHTML = frase.toUpperCase(frase)  
      break;                               
    default:
      document.getElementById('resultado').innerHTML = "Opçao inválida"
      break;

  }
}