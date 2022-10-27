var nPessoas = 0;
var media = 0;
var maisVelha = 0;
var maisNova = 200;
var pessimo = 0;
var otimos = 0;
var homens = 0;
var mulheres = 0;
var percent;

for (var i = 0; i < 45; i++) {
    let opcao;
    opcao = prompt("Quer responder o questionario: 1 = Sim, 2 = Não");
    if( opcao == 1 ){
        let idade;
        let sexo;
        let opniao;
        nPessoas = nPessoas + 1;
        idade = prompt("Informe sua idade");
        if ( parseFloat(idade) > maisVelha ){
            maisVelha = parseFloat(idade);
        }
        if ( parseFloat(idade) < maisNova ) {
            maisNova = parseFloat(idade);
        }
        media = media + parseFloat(idade);
        sexo = prompt("Informe o seu sexo, responda apenas M ou F");
        if (sexo == 'M' || sexo == 'm'){
            homens = homens + 1;
        }
        if ( sexo == 'F' || sexo == 'f'){
            mulheres = mulheres + 1;
        }
        opniao = prompt("O que você achou do filme: ótimo=4,bom=3,regular=2,péssimo=1");
        if(opniao == 1){
            pessimo = pessimo + 1;
        }
        if(opniao == 3 || opniao == 4){
            otimos = otimos + 1;
        }
        
    }

}

percent = ( otimos / nPessoas ) * 100;

media = media / nPessoas;

alert("A média de idades foi " + media);
alert("A pessoa mais velha tem " + maisVelha);
alert("A pessoa mais nova tem " + maisNova);
alert("A quantidade de pessimos foi " + pessimo);
alert("A porcentagem de Otimos e bons foi " + percent + "%");
alert("O numero de homens foi " + homens + " e de mulheres foi " + mulheres);


