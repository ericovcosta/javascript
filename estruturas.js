function lancar_dados(){
    let numero = 1+((Math.round(Math.random()*100) % 6))
    return numero
}
let dados = 6//= lancar_dados()

//Estrutura de desvio condicional / controle
//if
function verifica_vencedor(dado){
    if(dados === 6){
        console.log(`Deu ${dados}, Parabéns você ganhou!`)
    } else if(dados === 2) {
        console.log(`Deu ${dados}, Ficou perto!`)
    }
    else{
        console.log(`Deu ${dados}, Passou foi longe!`)    
    }
}

//Estruturas de repetição
//while
let contador = 0
while(dados !== 6){
    dados = lancar_dados()
    contador++
}
verifica_vencedor(dados)
console.log(contador)

//do-while
dados = 6
contador = 0
do{
    console.log(`Diferença`)
    dados = lancar_dados()
    contador++
}while(dados !== 6)

verifica_vencedor(dados)
console.log(contador)

//for
//  inicio
//          teste
//                 incremento        
for(x = 0;x < 10;x++){
    console.log(x)
}
x < 1