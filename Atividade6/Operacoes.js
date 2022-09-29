var num1;
var num2;
var soma;
var sub;
var produto;
var divisao;
var resto;

num1 = prompt("Digite o primeiro numero");
num2 = prompt("Digite o segundo numero");

soma = parseFloat(num1) + parseFloat(num2);

sub = parseFloat(num1) - parseFloat(num2);

produto = parseFloat(num1) * parseFloat(num2);

divisao = parseFloat(num1) / parseFloat(num2);

resto = parseFloat(num1) % parseFloat(num2);

alert(" A soma dos números é " + soma + "\n A diferença do primeiro para o segundo é " + sub + "\n O produto dos dois números é " + produto +
"\n A divisão do primeiro pelo segundo é " + divisao + "\n O resto da divisão do primeiro pelo segundo é " + resto);

