let nome, nomeMaiorAtleta: string = '';
let altura, maiorAltura: number = 0;

for(let i=1; i<=5; i++){
    nome = prompt(`Digite o nome do ${i}º atleta.`) ?? '';
    altura = parseInt(prompt(`Digite a altura do ${i}º atleta em cm.`) ?? '');

    if(altura > maiorAltura){
        nomeMaiorAtleta = nome;
        maiorAltura = altura;
    }
}

console.log(`O maior atleta é o ${nomeMaiorAtleta}.`);