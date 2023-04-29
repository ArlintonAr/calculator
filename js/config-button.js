import buttonConvertNumber from './convert-button-number.js'
import buttonConvertOperator from './convert-button-operator.js'
import getContentNumbers from './content-numbers.js'
import getContentOperators from './content-operator.js'
import operations from './operations.js'

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
            $actualAnswer.insertAdjacentHTML('beforeend', buttonConvertNumber(returnString(element, index)))
        })
    });

}

function eventButtonsOperators() {
    const list = getContentOperators();

    const $actualAnswer = document.querySelector("#actualAnswer")
    const $historyAnswer = document.querySelector("#historyAnswer")
    $actualAnswer.textContent = ""

    list.forEach((element, index) => {
        element.addEventListener("click", () => {
            $historyAnswer.textContent = `${$actualAnswer.textContent}`
            $actualAnswer.textContent = ""
            $historyAnswer.insertAdjacentHTML('beforeend', buttonConvertOperator(index))
        })
    })
}

function equal() {
    const $equal = document.querySelector("#buttonEqual")
    const $actualAnswer = document.querySelector("#actualAnswer")
    const $historyAnswer = document.querySelector("#historyAnswer")

    $equal.addEventListener("click", () => {
        $historyAnswer.insertAdjacentText("beforeend", `${$actualAnswer.textContent} = `)
        operations($historyAnswer.textContent)
    })
}

function deleteCamps() {
    const $actualAnswer = document.querySelector("#actualAnswer")
    const $historyAnswer = document.querySelector("#historyAnswer")
    const $buttonClearError = document.querySelector("#buttonClearError")
    const $buttonClear = document.querySelector("#buttonClear")
    const $delete=document.querySelector("#delete")
    $buttonClear.addEventListener("click", () => {
        $actualAnswer.textContent = " "
        $historyAnswer.textContent = " "
    })

    $buttonClearError.addEventListener("click", () => {
        $actualAnswer.textContent = " "
        $historyAnswer.textContent = " "
    })

    $delete.addEventListener("click",()=>{
        let string=$actualAnswer.textContent
        let newString=string.substring(0,string.length -1)
        $actualAnswer.textContent=newString

    })

}

export default function configButton() {
    getContentNumbers()
    eventButtonsNumbers()
    eventButtonsOperators()
    equal()
    deleteCamps()


}