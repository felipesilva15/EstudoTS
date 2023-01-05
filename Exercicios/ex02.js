"use strict";
var _a;
let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += parseInt((_a = prompt(`Digite o ${i}º número`)) !== null && _a !== void 0 ? _a : '');
}
console.log(`A soma dos números informados é igual a ${soma}`);
