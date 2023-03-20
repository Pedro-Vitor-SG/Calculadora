//PEGANDO TODOS OS ELEMENTOS QUE TEM 'number' NO ID
const numbers = document.querySelectorAll("[id*=number]");
const operations = document.querySelectorAll("[id*=operation]");

let newNumber = true;
let operation;
let previousNumber;

const pendingOperation = () => operation !== undefined;
console.log(operation);

const calc = () => {
  if (pendingOperation()) {
    const currentNumber = parseFloat(
      document.querySelector("#display").textContent.replace(",", ".")
    );
    newNumber = true;

    // const result = eval(`${previousNumber}${operation}${currentNumber}`);
    // updateDisplay(result);
    switch (operation) {
      case "+":
        updateDisplay(previousNumber + currentNumber);
        break;
      case "-":
        updateDisplay(previousNumber - currentNumber);
        break;
      case "x":
        updateDisplay(previousNumber * currentNumber);
        break;
      case "/":
        updateDisplay(previousNumber / currentNumber);
        break;
    }
  }
};

const updateDisplay = (txt) => {
  if (newNumber) {
    document.querySelector("#display").textContent = txt.toLocaleString("BR");
    newNumber = false;
  } else {
    document.querySelector("#display").textContent += txt.toLocaleString("BR");
  }
};

const insertNumer = (e) => {
  updateDisplay(e.target.textContent);
};

numbers.forEach((number) => {
  number.addEventListener("click", insertNumer);
});

const selectOperation = (e) => {
  if (!newNumber) {
    calc();
    newNumber = true;
    operation = e.target.textContent;
    previousNumber = parseFloat(
      document.querySelector("#display").textContent.replace(",", ".")
    );
    console.log(operation);
  }
};

operations.forEach((operation) => {
  operation.addEventListener("click", selectOperation);
});

const activeEqual = () => {
  calc();
  operation = undefined;
};

document.querySelector("#equal").addEventListener("click", activeEqual);

const cleanCalc = () => {
  document.querySelector("#display").textContent = "";
  operation = undefined;
  newNumber = true;
  previousNumber = undefined;
};
document.querySelector("#reset").addEventListener("click", cleanCalc);

const deleteLast = () => {
  document.querySelector("#display").textContent = document
    .querySelector("#display")
    .textContent.slice(0, -1);
};
document.querySelector("#delete").addEventListener("click", deleteLast);

const hasDecimal = () =>
  document.querySelector("#display").textContent.indexOf(",") !== -1;

const hasValue = () =>
  document.querySelector("#display").textContent.length > 0;

const decimalNumber = () => {
  if (!hasDecimal()) {
    if (hasValue()) {
      updateDisplay(",");
    } else {
      updateDisplay("0,");
    }
  }
};

document.querySelector("#point").addEventListener("click", decimalNumber);

const mapKeyboard = {
  '0': "number0",
  '1': "number1",
  '2': "number2",
  '3': "number3",
  '4': "number4",
  '5': "number5",
  '6': "number6",
  '7': "number7",
  '8': "number8",
  '9': "number9",
  '9': "number9",
  '9': "number9",
  '+': 'operationAdi',
  '-': 'operationSub',
  '*': 'operationMulti',
  '/': 'operationDiv',
  '=': 'equal',
  'Enter': 'equal',
  'Backspace': 'delete',
  'Space': 'reset',
  ',': 'point',

};
const mappingKeyboard = (e) => {
  const tecla = e.key;
    console.log(e)
  const teclaPermitida = () => Object.keys(mapKeyboard).indexOf(tecla) !== -1;

  if (teclaPermitida()) {
    document.querySelector(`#${mapKeyboard[tecla]}`).click();
  }
};
document.addEventListener("keyup", mappingKeyboard);
