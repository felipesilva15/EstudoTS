"use strict";
var _a;
let nome = '';
let nomes = new Array();
let cont = 0;
while (nome != 'sair') {
    nome = (_a = prompt('Digite um nome ou "sair" para parar de executar o código.')) !== null && _a !== void 0 ? _a : '';
    if (nome != 'sair') {
        nomes[cont] = nome;
    }
    cont++;
}
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
