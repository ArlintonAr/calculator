import buttonConvertNumber from './convert-button-number.js'
import buttonConvertOperator from './convert-button-operator.js'
import getContentNumbers from './content-numbers.js'
import getContentOperators from './content-operator.js' 


//obtiene un string a partir del boton
function returnString($button, id) {
    $button.textContent = `${id}`
    let string = $button.textContent
    return string
}


function eventButtonsNumbers() {
    const list = getContentNumbers();
    list.forEach((element, index) => {
        element.addEventListener("click", () => {
            const $actualAnswer = document.querySelector("#actualAnswer")
            $actualAnswer.insertAdjacentHTML('beforeend',buttonConvertNumber(returnString(element, index)))
            let valor = $actualAnswer.textContent
            storageValor(valor)
           
        })
    });

}

 function eventButtonsOperators(){
    const list = getContentOperators ();
    list.forEach((element, index) => {
        element.addEventListener("click", () => {
            const $actualAnswer = document.querySelector("#actualAnswer")
            $actualAnswer.insertAdjacentHTML('beforeend',buttonConvertOperator(index))  
            let valor = $actualAnswer.textContent
            storageValor(valor)        
        })
    });

}

function storageValor(valor) {
    let storageValorNumber = 0;
    storageValorNumber = storageValorNumber + valor

    return storageValorNumber
}

export default function configButton() {
    getContentNumbers()
    eventButtonsNumbers()
    eventButtonsOperators()
  
}