let ceps = ['54310160', '23454213', '54310260', '54310161', '54310165', '54334']

async function buscaEndereco (cep) {
    
    const verificadorDeCEP = /^\d{8}$/

    if (verificadorDeCEP.test(cep)) {

        try {
            var endereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            var enderecoJSON = await endereco.json()
            
            if (enderecoJSON.erro) {
                throw Error (`O cep ${cep} não existe.`)
            }
            
            console.log(enderecoJSON)
            return enderecoJSON
        
        } catch (erro) {
            console.log(erro)
        }
    
    } else {
        console.error(`CEP inválido: ${cep}.`)
    }
}

let conjuntoDeRespostasObtidas = ceps.map(cep => buscaEndereco(cep))

Promise.all(conjuntoDeRespostasObtidas).then(resultados => {
    let resultadosComValor = resultados.filter(resultado => resultado != undefined)
    console.log(resultadosComValor)
})