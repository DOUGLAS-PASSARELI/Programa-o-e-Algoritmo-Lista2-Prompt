//3 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor. 


var custoFabrica = parseFloat(prompt("Digite o Custo de Fabrica: "));

var porcDistribuidor = custoFabrica * 0.28;

var impostos = custoFabrica * 0.45;

var custoTotal = custoFabrica + porcDistribuidor + impostos;

alert("Custo Total do Carro: R$ " + custoTotal);

console.log(custoTotal);