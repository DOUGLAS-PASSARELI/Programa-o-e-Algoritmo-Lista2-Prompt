//6 -A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado. 


var kmPercorridos = parseFloat(prompt("Digite a Quantidade de Km Percorridos: "));

var diasAlugado = parseFloat (prompt("Digite a Quantidade de Dias Alugado(s): "));

var valorKm = kmPercorridos * 0.20;

var valorDias = diasAlugado * 90.0;

var valorTotal = valorDias + valorKm;


console.log(valorTotal);

alert("Total a Pagar R$: " + valorTotal);

