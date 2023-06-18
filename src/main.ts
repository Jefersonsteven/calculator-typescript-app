import './style.scss';
import './assets/theme';


const input = document.querySelector('#input');
const keyboard = document.querySelector('.main__keyboard');
const keysLength = keyboard?.children.length;
const equal = document.querySelector('#equal');
const remove = document.querySelector('#delete');
const reset = document.querySelector('#reset');

// * Calculator

let result: string = '';

function deleteChar(char: string) {
  const temp = char.split("");
  temp.pop()
  return temp.join("")
}

// * calculator button click
function calculatorClick(event: Event) {
  const target = event.target as HTMLButtonElement;
  const keyValue = target.value;
  const display = input as HTMLInputElement;
  const displayValue = display.value;

  if (
    ["+", "-", "/", "*", "."].includes(keyValue)
    && result.length === 0
  ) return

  if (["+", "-", "/", "*", "."].includes(result[result.length - 1])
    && ["+", "-", "/", "*", "."].includes(keyValue)) {
    const operator = keyValue;

    result = deleteChar(result);
    display.value = deleteChar(displayValue);
    result = result + operator;
    display.value = display.value + operator;
    return
  }

  const validate = /^[0-9+\-*/. ]+$/;
  if (validate.test(keyValue)) {
    if (displayValue.length === 1 && displayValue === "0" && keyValue !== '.') {

      display.value = keyValue;
      result = keyValue
      return
    }
    display.value = displayValue + keyValue;
    result = result + keyValue
  }
}

// * calculator keyboard
function calculatorInput(event: Event) {
  const target = event.target as HTMLInputElement;
  if (["+", "-", "/", "*", "."].includes(target.value) && result.length === 0) return target.value = ""

  if (["+", "-", "/", "*", "."].includes(target.value[target.value.length - 1])
    && ["+", "-", "/", "*", "."].includes(target.value[target.value.length - 2])) {
    const operator = target.value[target.value.length - 1];

    result = deleteChar(result);
    target.value = deleteChar(target.value);
    result = deleteChar(result);
    target.value = deleteChar(target.value);
    result = result + operator;
    target.value = target.value + operator;
  }

  const validate = /^[0-9+\-*/. ]+$/;
  if (validate.test(target.value)) {
    if (target.value.length === 2 && target.value[target.value.length - 2] === '0' && target.value[target.value.length - 1] !== '.') {
      console.log('x');

      target.value = target.value[target.value.length - 1];
      result = target.value[target.value.length - 1]
      return
    }
    result = target.value
    target.value = target.value
  } else {
    if (result) return target.value = result
    return target.value = ""
  }
}

function equalResult() {
  if (result !== '') {
    const INPUT = input as HTMLInputElement;
    if (["+", "-", "/", "*", "."].includes(result[result.length - 1])) {
      if (["/"].includes(result[result.length - 1])) {
        result = result + "1"
        INPUT.value = INPUT.value + "1"
      }
      result = result + "0"
      INPUT.value = INPUT.value + "0"
    }
    const operation: string = eval(result).toString();
    result = operation;
    INPUT.value = operation;
  }
}

function Reset() {
  if (result !== '') {
    result = "";
    const INPUT = input as HTMLInputElement;
    INPUT.value = "";
  }
}

function Remove() {
  if (result !== '') {
    const INPUT = input as HTMLInputElement;
    result = deleteChar(result);
    INPUT.value = deleteChar(INPUT.value);
  }
}


// * add Listener to the keys of the calculator
if (keysLength) {
  for (let i = 0; i < keysLength; i++) {
    const key = keyboard?.children[i];
    const element = key as HTMLButtonElement;
    !["DEL", "RESET", "="].includes(element.value) &&
      key.addEventListener('click', calculatorClick);
  }
}

input?.addEventListener('input', calculatorInput);
input?.addEventListener('keyup', (event: KeyboardEventInit) => {
  const keyCode: string = event.code as string;
  if (keyCode === "Enter") {
    equalResult()
  }
})
equal?.addEventListener('click', equalResult);
reset?.addEventListener('click', Reset);
remove?.addEventListener('click', Remove);


