

export default function getContentOperators() {
    const $buttonPorcentage = document.querySelector("#buttonPorcentage")
    const $buttonEmpowerment = document.querySelector("#buttonEmpowerment")
    const $buttonSquare = document.querySelector("#buttonSquare")
    const $buttonDivision = document.querySelector("#buttonDivision")
    const $buttonMultiplication = document.querySelector("#buttonMultiplication")
    const $buttonAddition = document.querySelector("#buttonAddition")
    const $buttonSubstraction = document.querySelector("#buttonSubstraction")

    const listButtonsOperators = [
        $buttonPorcentage,
        $buttonEmpowerment,
        $buttonSquare,
        $buttonDivision,
        $buttonMultiplication,
        $buttonAddition,
        $buttonSubstraction
    ]
    return listButtonsOperators
}