const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add")
const subtractBtn = document.getElementById("btn-subtract")
const mulBtn = document.getElementById("btn-mul")
const divBtn = document.getElementById("btn-div")

const currentResultOutput = document.getElementById("current-result")
const currentCalculationResult = document.getElementById("current-calculation");

function outputResult(result,text){
    currentResultOutput.textContent = result;
    currentCalculationResult.textContent = text;
}