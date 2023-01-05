let record: number = 0;
let numero: number = 0

for(let i=0; i<5; i++){
    numero = parseInt(prompt(`Digite o ${i + 1}º número`) ?? '')

    console.log(numero);

    if(numero > record){
        record = numero;
    }
}

console.log(`O maior número digitado foi o ${record}`);