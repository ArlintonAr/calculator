 export default function operations(string) {
    const $actualAnswer=document.querySelector("#actualAnswer")
    const valorOperation = string
    let result
    for (const valor of valorOperation) {
        if (valor === "+") {
            let elementsAdditions = valorOperation.split("+")
            result = parseInt(elementsAdditions[0]) + parseInt(elementsAdditions[1])
            $actualAnswer.textContent = result
        }
        if (valor === "-") {
            let elementsAdditions = valorOperation.split("-")
            result = parseInt(elementsAdditions[0]) - parseInt(elementsAdditions[1])
            $actualAnswer.textContent = result
        }
        if (valor === "x") {
            let elementsAdditions = valorOperation.split("x")
            result = parseInt(elementsAdditions[0]) * parseInt(elementsAdditions[1])
            $actualAnswer.textContent = result
        }
        if (valor === "/") {
            let elementsAdditions = valorOperation.split("/")
            result = parseInt(elementsAdditions[0]) / parseInt(elementsAdditions[1])
            $actualAnswer.textContent = result
        }
    }
}