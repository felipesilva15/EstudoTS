class teste02{
    async teste(): Promise<string>  {
        return await this.teste2().then( ret => {
            console.log('passou pela função teste');
            return ret;
        })
    }

    async teste2(): Promise<string> {
        return "função string";
    }
}

const teste02Classe: teste02 = new teste02();

teste02Classe.teste().then( retorno => {
    console.log(retorno);
} )