"use strict";
var _a, _b;
let nome, nomeMaiorAtleta = '';
let altura, maiorAltura = 0;
for (let i = 1; i <= 5; i++) {
    nome = (_a = prompt(`Digite o nome do ${i}º atleta.`)) !== null && _a !== void 0 ? _a : '';
    altura = parseInt((_b = prompt(`Digite a altura do ${i}º atleta em cm.`)) !== null && _b !== void 0 ? _b : '');
    if (altura > maiorAltura) {
        nomeMaiorAtleta = nome;
        maiorAltura = altura;
    }
}
console.log(`O maior atleta é o ${nomeMaiorAtleta}.`);
