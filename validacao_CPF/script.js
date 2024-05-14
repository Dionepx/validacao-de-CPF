var btn = document.getElementById('search')

function validaCPF(inputText) { // caracteres digitado
     if (inputText.length === 11) { 
          return true
     } else {
          return false  
     }
}

function validacao() {
     var inputText = document.getElementById('cpf_digitado').value

     var validacaoResultado = validaCPF(inputText)

     if (validacaoResultado) { // Se for verdadeiro, execute o bloco de codigo abaixo
          document.getElementById('resultado').innerHTML += `
               <div>
                    <h4>CPF correto :)</h4>
               </div>
          `
     } else {
          document.getElementById('resultado').innerHTML += `
               <div>
                    <h4>Seu CPF não existe !</h4>
               </div>
          `
     }
}

btn.addEventListener('click', validacao)