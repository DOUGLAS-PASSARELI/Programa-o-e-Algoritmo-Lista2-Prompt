//2 - Elaborar um programa que apresente o valor da conversão em real (R$) de um valor lido em dólar (US$). O programa deve solicitar o valor da cotação do dólar.


var real = parseFloat(prompt("Digite o valor R$:"));

var cotacao = parseFloat(prompt("Digite o valor do Dollar: US$"))

var valorDollar = real / cotacao;


console.log("Valor: US$: " + valorDollar); 


alert("Total Dollar US$: " + valorDollar);