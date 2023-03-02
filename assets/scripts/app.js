const defaultResult = 0;
let currentResult = defaultResult;
const logEntries=[];
function getUserNumber(){
    return parseInt(userInput.value);
}
function readAndWrite(operator,calcResultBefore,calcNumber){
    const calcDescription = `${calcResultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription)
}
function writeToLog(operationIdentifier,prevResult,opertionNumber,newResult){
    const logEntry = {
        opertion:operationIdentifier,
        prevResult:prevResult,
        number:opertionNumber,
        result :newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}
function add(){
    const enterNumber = getUserNumber();
    const initialValue = currentResult;
    currentResult += enterNumber;
    readAndWrite('+',initialValue,enterNumber);
    writeToLog('ADD',initialValue,enterNumber,currentResult)
    
}
function subtract(){
    const enterNumber = getUserNumber();
    const initialValue = currentResult;
    currentResult -= enterNumber;
    readAndWrite('-',initialValue,enterNumber);
    writeToLog('SUBTRACT',initialValue,enterNumber,currentResult)
}
function multiply(){
    const enterNumber = getUserNumber();
    const initialValue = currentResult;
    currentResult *= enterNumber;
    readAndWrite('*',initialValue,enterNumber);
    writeToLog('MULTIPLY',initialValue,enterNumber,currentResult)
}
function divide(){
    const enterNumber = getUserNumber();
    const initialValue = currentResult;
    currentResult /= enterNumber;
    readAndWrite('/',initialValue,enterNumber);
    writeToLog('DIVISION',initialValue,enterNumber,currentResult)
}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
mulBtn.addEventListener('click',multiply)
divBtn.addEventListener('click',divide)