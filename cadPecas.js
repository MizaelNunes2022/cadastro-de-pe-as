let listaQtdPecas = 10;

let peso = 50;
let nomePecas = "pc";

if(peso >= 100){
    console.log("Peso da peça possui requisitos para cadastrar");
} else {
    console.log("Peso Insuficiente - não pode cadastrar")
}

if(listaQtdPecas >= 10){
    console.log("não há capacidade na lista: Caixa Lotada!!!");
}

if( nomePecas.length < 3 ){
    console.log("Nome Inválido para o cadastro da peça; precisa conter pelo menos 3 caracteres")
}