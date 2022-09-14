// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

// function imprimirNome(nome){
//     console.log(`Olá, ${nome}`)
// }

// imprimirNome("Bruno!")

// function imprimirTabuada(valor){
//     for(i = 1; i <= 10; i++){
//         let tabuada = valor * i
//         console.log(tabuada)
//     }
// }
// imprimirTabuada(6)

// const imprimirNome = (nome) => {
//     console.log(`Olá, ${nome}`)
// }
// imprimirNome("Bruno!")

const imprimirTabuada = (valor) => {
    for(i = 1; i <= 10; i++){
       let tabuada = valor * i
       console.log(tabuada)
    }
}
imprimirTabuada(6)

