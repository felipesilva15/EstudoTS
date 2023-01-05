"use strict";
var _a;
let numeros = new Array();
let numero = 0;
console.log('Numeros na ordem crescente');
for (let i = 0; i < 3; i++) {
    numero = parseInt((_a = prompt(`Digite o ${i + 1}º número`)) !== null && _a !== void 0 ? _a : '');
    numeros.push(numero);
}
// Ordem digitada
console.log(numeros);
// Order inversa
console.log(numeros.reverse());
