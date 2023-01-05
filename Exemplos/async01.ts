class teste01{​
    async teste(): Promise<string>{
        return "função string";
    }
}

const teste01Classe: teste01 = new teste01();

teste01Classe.teste().then(retorno => {
    console.log(retorno);
})