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
function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
    const logEntry = {
        operation:operationIdentifier,
        prevResult:prevResult,
        number:operationNumber,
        result :newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}
function calculateResult(calcType){
    if(calcType !== 'ADD'&& calcType !== 'SUBTRACT'&&calcType !== 'MULTIPLY' && calcType !== 'DIVIDE'){
        return;
    }
    const enterNumber = getUserNumber();
    const initialValue = currentResult;
    let mathOperator;
    if(calcType === 'ADD'){
        currentResult += enterNumber;
        mathOperator = '+';
    }else if(calcType === 'SUBTRACT'){
        currentResult -= enterNumber;
        mathOperator = '-';
    }else if(calcType === 'MULTIPLY'){
        currentResult *= enterNumber;
        mathOperator = '*';
    }else {
        currentResult /= enterNumber;
        mathOperator = '/';
    }
    readAndWrite(mathOperator,initialValue,enterNumber);
    writeToLog(calcType,initialValue,enterNumber,currentResult)
}
function add(){
    calculateResult('ADD');
}
function subtract(){
    calculateResult('SUBTRACT');
}
function multiply(){
    calculateResult('MULTIPLY');
}
function divide(){
    calculateResult('DIVIDE');
}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
mulBtn.addEventListener('click',multiply)
divBtn.addEventListener('click',divide)