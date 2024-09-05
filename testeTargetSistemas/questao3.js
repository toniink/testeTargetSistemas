//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
//• O menor valor de faturamento ocorrido em um dia do mês;
//• O maior valor de faturamento ocorrido em um dia do mês;
//• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

//MPORTANTE:
//a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
//b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


let menorValorFaturamento = Infinity;
let maiorValorFaturamento = 0;
let mediaMensal = 0;
let somaFaturamento = 0;
let menorDia = 0;
let maiorDia = 0;
let quantidadeDiasAcimaMedia = 0;
let index = 1;
let qtdDias = 0;
const faturamentoDiario = [
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
]
for (index = 0; index < faturamentoDiario.length; index++) {
    const valor = faturamentoDiario[index].valor;
    const dia = faturamentoDiario[index].dia;
    if (valor > maiorValorFaturamento) {
        maiorValorFaturamento = valor;
        maiorDia = dia;
    }
    if (valor < menorValorFaturamento && valor !== 0) {
        menorValorFaturamento = valor;
        menorDia = faturamentoDiario[index].dia;
    }
    if (valor !== 0) {
        somaFaturamento = valor + somaFaturamento;
        qtdDias++;
    }
}
mediaMensal = (somaFaturamento / qtdDias);

for (index = 0; index < faturamentoDiario.length; index++) {
    if (faturamentoDiario[index].valor > mediaMensal) {
        quantidadeDiasAcimaMedia++;
    }
}
console.log("O menor valor faturado no mês: R$" + menorValorFaturamento.toFixed(2) + " No dia: " + menorDia);
console.log("O maior valor faturado no mês: R$" + maiorValorFaturamento.toFixed(2) + " No dia: " + maiorDia);
console.log("Número de dias acima da média mensal de R$" + mediaMensal.toFixed(2) + ": " + quantidadeDiasAcimaMedia); 