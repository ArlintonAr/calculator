import buttonConvertNumber from './converButton.js'

//obtiene un string a partir del boton
function returnString($button, id) {
    $button.textContent = `${id}`
    let string = $button.textContent
    return string
}

function getContentButton() {
    const $cero = document.querySelector("#buttonCero")
    const $one = document.querySelector("#buttonOne")
    const $two = document.querySelector("#buttonTwo")
    const $three = document.querySelector("#buttonThree")
    const $four = document.querySelector("#buttonFour")
    const $five = document.querySelector("#buttonFive")
    const $six = document.querySelector("#buttonSix")
    const $seven = document.querySelector("#buttonSeven")
    const $eight = document.querySelector("#buttonEight")
    const $nine = document.querySelector("#buttonNine")

    const listButtons = [
        $cero,
        $one,
        $two,
        $three,
        $four,
        $five,
        $six,
        $seven,
        $eight,
        $nine
    ]
    return listButtons
}

function eventButton(){
   const list=getContentButton();
    list.forEach((element, index) => {
        element.addEventListener("click", () => {
            const $actualAnswer= document.querySelector("#actualAnswer")
            $actualAnswer.textContent = buttonConvertNumber(returnString(element,index))    
           let valor= $actualAnswer.textContent
            storageValor(valor)
        })
    });

}

function storageValor(valor){
  let storageValorNumber=0;
    storageValorNumber=storageValorNumber +valor
    debugger
    return storageValorNumber
}

export default function configButton() {
    getContentButton()
    eventButton()
}