async function montaOla(): Promise<string>{
    let nome: string = await obterNome();

    return `Olá, ${nome}`;
}

async function obterNome(): Promise<string>{
    return prompt('Digite seu nome.') ?? 'Irineu';
}

montaOla().then(res => {
    console.log(res);
})