//4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
//• SP – R$67.836,43
//• RJ – R$36.678,66
//• MG – R$29.229,88
//• ES – R$27.165,48
//• Outros – R$19.849,53

//Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 

let somaTotal = 0;
let percentual = 0;
const faturamentoMensal = [
    {
        "estado": "SP",
        "valor" : 67836.43
    },
    {
        "estado": "RJ",
        "valor" : 36678.66
    },
    {
        "estado": "MG",
        "valor" : 29229.88
    },
    {
        "estado": "ES",
        "valor" : 27165.47
    },
    {
        "estado": "outros",
        "valor" : 19849.53
    }
]
let faturamentoPercentual = [
    {
        "estado": "SP",
        "valor" : 0
    },
    {
        "estado": "RJ",
        "valor" : 0
    },
    {
        "estado": "MG",
        "valor" : 0
    },
    {
        "estado": "ES",
        "valor" : 0
    },
    {
        "estado": "outros",
        "valor" : 0
    }
]
for(let index = 0; index < faturamentoMensal.length; index++){
    somaTotal = faturamentoMensal[index].valor + somaTotal;
}


for(let index = 0; index < faturamentoMensal.length; index++){
    faturamentoPercentual[index].valor = (faturamentoMensal[index].valor / somaTotal) * 100;
}

for(let index = 0; index < faturamentoMensal.length; index++){

    console.log("Estado: " + faturamentoMensal[index].estado+ " Percentual: "+faturamentoPercentual[index].valor.toFixed(2)+"%");
}