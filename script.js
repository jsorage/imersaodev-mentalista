var numeroSecreto = parseInt(Math.random() * 11);
var numeroDeTentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute === numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10!";
  } else if (chute > numeroSecreto) {
    numeroDeTentativas = numeroDeTentativas -1;
    elementoResultado.innerHTML = "Você errou, o número secreto é menor. Você tem mais " + numeroDeTentativas + " tentativas";
  } else if (chute < numeroSecreto) {
    numeroDeTentativas = numeroDeTentativas -1;
    elementoResultado.innerHTML =
      "Você errou o número secreto é maior. Você tem mais " +
      numeroDeTentativas +
      " tentativas";
  }
  if (numeroDeTentativas === 0) {
    elementoResultado.innerHTML =
      "Acabaram suas tentativas. O número secreto era " + numeroSecreto;
    numeroSecreto = Math.floor(Math.random() * 11);    
  }  
}
