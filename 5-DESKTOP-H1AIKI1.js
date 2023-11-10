// 5 - Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 


var totalEleitores = parseInt(prompt("Quantidade de Eleitores: "));

var votosBrancos = parseInt(prompt("Quantidade de Votos Brancos:"));

var votosNulos = parseInt(prompt("Quantidade de Votos Nulos: "));

var votosValidos = totalEleitores - votosBrancos - votosNulos;

var porcVotosValidos = votosValidos * 100 / totalEleitores;

var porcVotosBrancos = votosBrancos * 100 / totalEleitores;

var porcVotosNulos = votosNulos *  100  / totalEleitores;

console.log(porcVotosValidos);
console.log(porcVotosBrancos);
console.log(porcVotosNulos);

alert("Porcentagem Votos válidos: " + porcVotosValidos);
alert("Porcentagem Votos Brancos: " + porcVotosBrancos);
alert("Porcentagem Votos Nulos: " + porcVotosNulos);
