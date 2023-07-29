let nome = ['Alessandra', 'Laise', 'João']
let telefone = [999887891,999995678,981917161]
let alunos_agenda = [nome,telefone]

function pegar_telefone(nome){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]

    if(aluno.includes(nome)){
        let indice = aluno.indexOf(nome)
        console.log(telefone[indice])
    }
    else{
        console.log('Aluno não cadastrado')
    }
}

function exibir_agenda(){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]
    
    let tamanho = aluno.length
    
    for(posicao = 0;posicao < tamanho;posicao++){
        console.log(
            `${aluno[posicao]} : ${telefone[posicao]}`
        )
    }
}

function input(mensagem){
    const prompt = require("prompt-sync")();
    let entrada = prompt(`${mensagem}: `)
    return entrada
}

function cadastra_agenda(){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]
    
    const novoAluno = input('Qual o nome do Aluno')
    aluno.push(novoAluno)
    if(aluno.includes(novoAluno)){
        const novoTelefone = input(`Qual o telefone de ${novoAluno}`)
        telefone.push(novoTelefone)
    }
    else{
        console.log('Erro ao cadastrar')
    }
}

exibir_agenda()
cadastra_agenda()
exibir_agenda()