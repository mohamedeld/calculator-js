const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumber(){
    return parseInt(userInput.value);
}
function readAndWrite(operator,calcResultBefore,calcNumber){
    const calcDescription = `${calcResultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription)
}
function add(){
    const enterNumber = getUserNumber();
    const initialValue = currentResult;
    currentResult += enterNumber;
    readAndWrite('+',initialValue,enterNumber);
}
function subtract(){
    const enterNumber = getUserNumber();
    const initialValue = currentResult;
    currentResult -= enterNumber;
    readAndWrite('-',initialValue,enterNumber);
}
function multiply(){
    const enterNumber = getUserNumber();
    const initialValue = currentResult;
    currentResult *= enterNumber;
    readAndWrite('*',initialValue,enterNumber);
}
function divide(){
    const enterNumber = getUserNumber();
    const initialValue = currentResult;
    currentResult /= enterNumber;
    readAndWrite('/',initialValue,enterNumber);
}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
mulBtn.addEventListener('click',multiply)
divBtn.addEventListener('click',divide)