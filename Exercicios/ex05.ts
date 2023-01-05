let nome: string = '';
let nomes: string[] = new Array();
let cont: number = 0;

while(nome != 'sair'){
    nome = prompt('Digite um nome ou "sair" para parar de executar o código.') ?? '';

    if(nome != 'sair'){
        nomes[cont] = nome;
    }

    cont++
}

for(let i=0; i < nomes.length; i++){
    console.log(nomes[i]);
}