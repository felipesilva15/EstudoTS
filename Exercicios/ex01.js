"use strict";
var _a;
let numero;
numero = parseInt((_a = prompt('Digite um número')) !== null && _a !== void 0 ? _a : '');
if (numero % 2 == 0) {
    console.log(`${numero} é um número par`);
}
else {
    console.log(`${numero} é um número ímpar`);
}
