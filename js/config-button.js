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
        })
    });

}

 function eventButtonsOperators(){
     const list = getContentOperators ();

     const $actualAnswer = document.querySelector("#actualAnswer")
     const $historyAnswer=document.querySelector("#historyAnswer")
     $actualAnswer.textContent=""
    
     list.forEach((element, index) => {
        element.addEventListener("click", () => {    
            $historyAnswer.textContent=`${$actualAnswer.textContent}`
            $actualAnswer.textContent=""    
            $historyAnswer.insertAdjacentHTML('beforeend',buttonConvertOperator(index)) 
            
        })
    });
}

function operations(){
  
}


function storageValors(valor) {
    let storageValors = 0;
    storageValorNumber = storageValorNumber + valor

    return storageValorNumber
}

export default function configButton() {
    getContentNumbers()
    eventButtonsNumbers()
    eventButtonsOperators()
  
}