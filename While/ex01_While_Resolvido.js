// Faça uma Função usando While que imprima no console numeros pares de 0 a 10

function numerosPares () {
    let numero = 0
    while(numero <= 10){
        if(numero % 2 === 0) {
            console.log(numero)
        }
        numero++
    }
}
numerosPares()