
//Array
        //  indice
         // 0 1 2 3 4 5   
let dado = [1,2,3,4,5,6]

function lancar_dados(){
    let numero = 1+((Math.round(Math.random()*100) % 6))
    return numero
}

let nome = 'Matheus'
let somaVetor = 0
for(coluna = 0;coluna < 6; coluna++){
    somaVetor = somaVetor + dado[coluna]
}
console.log(somaVetor)

//matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let matriz1 =[[1,2,3],[4,5,6],[7,8,9]]
let soma = matriz[0][0]+matriz[1][1]+matriz[2][2]
let matriz3 = [
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i']
    ],
    [
        [0,1,0],
        [1,0,1],
        [0,1,0]
    ]
]

console.log(soma)

