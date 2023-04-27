export default function getContentNumbers() {
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

    const listButtonsNumbers = [
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
    return listButtonsNumbers
}
