//alert('Boas vindas ao jodo do número secreto');
let numeroMaximo;
numeroMaximo = prompt(`Digite o número entre 100 a 1000`);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

var acertou = 'PARABÉNS! Voçê acertou o número secreto'
var errou = 'Não foi dessa vez, você errou :(';

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor - ${chute}`);
        } else {
            alert(`O número secreto é maior - ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++
    }
}

//Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`${acertou} ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//Todo if / else abaixo foi alterado para as linhas de cima
//if (tentativas > 1) {
    // poedia ser assim = alert(`Voçê acertou ${numeroSecreto}`);
    //alert(acertou + ' ' + numeroSecreto + ' com ' + tentativas + ' chutes');
//    alert(`${acertou} ${numeroSecreto} com ${tentativas} chutes`);
//} else {
//    alert(`${acertou} ${numeroSecreto} com ${tentativas} chute`);
//}
