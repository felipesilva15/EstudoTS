let numeros: number[] = new Array();
let numero: number = 0;

console.log('Numeros na ordem crescente');

for(let i=0; i<3; i++){
    numero = parseInt(prompt(`Digite o ${i + 1}º número`) ?? '')

    numeros.push(numero);
}

// Ordem digitada
console.log(numeros);

// Order inversa
console.log(numeros.reverse());