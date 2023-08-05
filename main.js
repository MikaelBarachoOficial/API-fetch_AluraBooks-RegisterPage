const cepField = document.getElementById('cep')
const cepErrorField = cepField.parentNode.querySelector('#cep-erro')

cepField.addEventListener('focusout', (event) => {
    let cep = event.target.value
       
    fetchCep(cep)
})

async function fetchCep (cep) {

    const cepVerifier = /^\d{8}$/
    
    if(cepVerifier.test(cep)) {

        try {
            const adress = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const adressJSON = await adress.json()

            if(adressJSON.erro) {
                throw Error ()
            }

            document.getElementById('endereco').value = adressJSON.logradouro;
            document.getElementById('bairro').value = adressJSON.bairro;
            document.getElementById('cidade').value = adressJSON.localidade;
            document.getElementById('estado').value = adressJSON.uf;

            cepErrorField.innerHTML = ''

        } catch(error) {
            cepErrorField.innerHTML = '<p>Este CEP não existe!</p>'
        }

    } else {
        cepErrorField.innerHTML = '<p>Formato de CEP Inválido!</p>'
    }

}
