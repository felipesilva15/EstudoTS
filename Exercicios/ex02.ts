let soma: number = 0;

for(let i=1; i<=10; i++){
    soma += parseInt(prompt(`Digite o ${i}º número`) ?? '');
}

console.log(`A soma dos números informados é igual a ${soma}`);