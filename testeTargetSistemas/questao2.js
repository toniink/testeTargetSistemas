//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um //programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
//e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//MPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let A = 1;
let B = 1;
let C = 0;
let numeroInformado = 0;

numeroInformado = prompt("Informe um número: ");
numeroInformado = parseInt(numeroInformado);

while (A < numeroInformado) {
    C = A + B;
    A = B;
    B = C;

    if (numeroInformado === C){
        console.log("O número informado "+ numeroInformado+" pertence a sequência.");
        break;
    } else if (A > numeroInformado){
        console.log("O número informado "+ numeroInformado+" não está presente na sequência.");
        break;
    }
}
