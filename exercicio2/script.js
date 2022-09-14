// Letra "A"

const somandoNumeros = function(num1, num2){
    const soma = num1 + num2;
    console.log(soma);
    return soma;
}
const soma1 = somandoNumeros(1,2)

// Letra "B"

const numBooleano = function(num1, num2){
    let teste = num1 >= num2
    console.log(teste)
}
numBooleano(2,1)
numBooleano(1, 10)

// Letra "C"

function numPar(num){
    console.log(num % 2)
}
numPar(9)
numPar(8)

// Letra "D"

function string(palavra){
    console.log(`A quantidade de letras dessa palavra são: ${palavra.length}`)
    console.log(`${palavra.toUpperCase()}`)
}
string("Vampiro")
