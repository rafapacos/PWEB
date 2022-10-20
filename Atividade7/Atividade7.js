var choiceUser;
var choiceCpu;
var random;



alert("Bem Vindo ao Pedra, Papel, Tesoura - JS")

choiceUser = prompt("Digite Pedra, Papel ou Tesoura").toUpperCase();

alert("Você escolheu " + choiceUser);

random = Math.random();

if (random <= 0.33){
    choiceCpu = "PEDRA"
} 
else if ( random <= 0.66) {
    choiceCpu = "PAPEL"
} 
else {
    choiceCpu = "TESOURA"
}

alert("O Computador Escolheu " + choiceCpu);

if (choiceUser == choiceCpu){
    alert("Empatou !!")
}
else{
    if (choiceUser == "PEDRA") {
        if(choiceCpu == "TESOURA"){
            alert("Parabéns você Venceu !!")
        }else{
            alert("Que pena você Perdeu !!")
        }
    }
    if (choiceUser == "PAPEL") {
        if(choiceCpu == "PEDRA"){
            alert("Parabéns você Venceu !!")
        }else{
            alert("Que pena você Perdeu !!")
        }
    }
    if (choiceUser == "TESOURA") {
        if(choiceCpu == "PAPEL"){
            alert("Parabéns você Venceu !!")
        }else{
            alert("Que pena você Perdeu !!")
        }
    }

}
