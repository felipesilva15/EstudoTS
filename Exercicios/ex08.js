"use strict";
// Função para encontrar índices de um números específico
function encontrarIndices(vetor, numSelecionado) {
    let retorno = new Array();
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] == numSelecionado) {
            retorno.push(i);
        }
    }
    return (retorno);
}
let numeros = new Array();
const numSelecionado = 30;
let indices = new Array();
// Define 100 números aleatório entre 0 e 100
for (let i = 0; i < 100; i++) {
    numeros[i] = Math.floor(Math.random() * 100) + 1;
}
// Captura os indices
indices = encontrarIndices(numeros, numSelecionado);
// Exibe os dados na tela
console.log(`Numeros sorteados: ${numeros}`);
console.log(`Indices dos números sorteados que são igual a ${numSelecionado}: ${indices}`);
