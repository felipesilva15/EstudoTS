"use strict";
var _a;
let record = 0;
let numero = 0;
for (let i = 0; i < 5; i++) {
    numero = parseInt((_a = prompt(`Digite o ${i + 1}º número`)) !== null && _a !== void 0 ? _a : '');
    console.log(numero);
    if (numero > record) {
        record = numero;
    }
}
console.log(`O maior número digitado foi o ${record}`);
