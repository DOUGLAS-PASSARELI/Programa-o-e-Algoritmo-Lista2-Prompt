//3 - Crie um programa que lê o ano de nascimento de uma pessoa e o ano atual. Calcule e mostre qual é: a idade da pessoa em anos, a idade da pessoa em meses, a idade da pessoa em dias e a idade da pessoa em semanas. 


var anoAtual = parseInt(prompt("Digite o ano atual: "));

var anoNascimento = parseInt(prompt("Digite o ano de Nascimento: "));

var idadeAnos = anoAtual - anoNascimento;

var idadeMeses = idadeAnos * 12;

var idadeDias = idadeMeses * 30;

var idadeSemanas = idadeDias / 7;

alert("Sua idade em anos é: " + idadeAnos);
alert("Sua idade em meses é: " + idadeMeses);
alert("Sua idade em dias é: " + idadeDias);
alert("Sua idade em semanas é: " + idadeSemanas);

console.log(idadeAnos);
console.log(idadeMeses);
console.log(idadeDias);
console.log(idadeSemanas);
