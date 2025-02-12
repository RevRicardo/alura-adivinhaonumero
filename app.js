//alert('Boas vindas ao jodo do número secreto');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

var acertou = 'PARABÉNS! Voçê acertou o número secreto'
var errou = 'Não foi dessa vez, você errou :(';

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 a 10');
    if (chute == numeroSecreto) {
        // poedia ser assim = alert(`PARABÉNS! Voçê acertou o número secreto ${numeroSecreto}`);
        alert(acertou + ' ' + numeroSecreto + ' com ' + tentativas + ' chutes');
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