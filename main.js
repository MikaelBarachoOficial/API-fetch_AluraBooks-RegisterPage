var cep = '54310160'

function buscaEndereçoPeloCep (cep) {

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(resposta => resposta.json())
.then(resposta => {
    if (resposta.erro) {
       throw Error(`O cep ${cep} não existe!`)
        
    } else {
        console.log(resposta)
    }
    
})
.catch(motivoDoErro => console.log(motivoDoErro))
.finally(() => console.log('Processamento de API concluído!'))

}

// Define a variável regex com uma expressão regular que verifica se uma string contém apenas números e tem 8 dígitos
var verificadorDe8Digitos = /^\d{8}$/

// Usa o método 'test' da expressão regular para verificar se o valor do CEP é válido
if (verificadorDe8Digitos.test(cep)) {

    // Se o valor do CEP for válido, chama a função 'buscaEndereçoPeloCep' passando o valor do CEP como parâmetro
    buscaEndereçoPeloCep(cep)

} else {

    // Se o valor do CEP não for válido, exibe um alerta
    console.error('Por favor, insira um CEP válido')

}
