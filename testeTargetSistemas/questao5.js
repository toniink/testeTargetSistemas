//5) Escreva um programa que inverta os caracteres de um string.

//IMPORTANTE:
//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
//b) Evite usar funções prontas, como, por exemplo, reverse;

function inverteString (stringRecebida) {
    let stringInvertida = "";

    for (let index = stringRecebida.length - 1; index >= 0; index--){
        stringInvertida = stringInvertida + stringRecebida[index];
    }
    return stringInvertida;
}

let stringDefinida = "Olá, mundo";

console.log("String normal: "+ stringDefinida);
console.log("String Invertida: "+ inverteString(stringDefinida));