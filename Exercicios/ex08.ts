// Função para encontrar índices de um números específico
function encontrarIndices(vetor: number[], numSelecionado: number){
    let retorno: number[] = new Array();

    for(let i=0; i<vetor.length; i++){
        if(vetor[i] == numSelecionado){
            retorno.push(i);
        }
    }

    return(retorno);
}

let numeros: number[] = new Array();
const numSelecionado: number = 30;
let indices: number[] = new Array();

// Define 100 números aleatório entre 0 e 100
for(let i=0; i<100; i++){
	numeros[i] = Math.floor(Math.random() * 100) + 1;
}

// Captura os indices
indices = encontrarIndices(numeros, numSelecionado);

// Exibe os dados na tela
console.log(`Numeros sorteados: ${numeros}`);
console.log(`Indices dos números sorteados que são igual a ${numSelecionado}: ${indices}`);