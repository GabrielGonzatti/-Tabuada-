// SELEÇÃO DE ELEMENTOS
const multiplicationForm = document.querySelector("#multiplaction-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplication-operations")

// FUNÇÕES

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
        const template = `
            <div class="row">
                <div class="operation">${number} X ${i} = </div>
                <div class="result">${result}</div>
            </div>`;
        multiplicationTable.innerHTML += template;

    }

}


// EVENTOS
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    // console.log(multiplicationNumber)
    // console.log(multiplicatorNumber)

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});