
var nota1;
var nota2;
var nota3;
var aluno;
var resultado;


var media = function (nota1,nota2,nota3) {

    var resultado;

    resultado = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

    return resultado;

}

aluno = prompt("Digite seu nome");

nota1 = prompt("Digite a primeira nota");
nota2 = prompt("Digite a segunda nota");
nota3 = prompt("Digite a terceira nota");

resultado = media(nota1,nota2,nota3);

alert("A media das notas do " + aluno + " é " + resultado);

