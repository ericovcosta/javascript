//Aritméticos
// + adição
// - subtração
// * multiplicação
// / divisão
// % modulo (resto)
let numeroUm = 5
let numeroDois = 6
let numeroTres = -1

const mensagem = `NumeroDois (${numeroDois}) + NumeroTres (${numeroTres}) = ${numeroDois+numeroTres}`

console.log(mensagem)

console.log(numeroDois+"+"+numeroTres+"="+(numeroDois+numeroTres))

console.log(numeroDois%numeroUm);
//Relacionais
// > maior que
// < menor que
// != diferente
//     !==
// == igual
//     ===
// >= maior ou igual
// <= menor ou igual

let numeroString = '6'
console.log(numeroDois === numeroString)
// = Atribuição

//Lógicos
// && E
// || OU
// ! NÃO

console.log(!(numeroDois === numeroString))

//autoincremento
let a = 0;

a = a + 1;
console.log(a);

a++;
console.log(a);

++a;
console.log(a);

let b = 10;

console.log(b--);

console.log(--b);

//aritméticos de atribuição
// +=
// -+
// *=
// /=
// %=
let c = 0;
c = c + 5;
console.log(c);
c += 5;
console.log(c);