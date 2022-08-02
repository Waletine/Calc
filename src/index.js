const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const inputText = document.querySelector('input');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');

function calc(text) {
  let operator;

  if (text.indexOf('+') > 0) {
    operator = '+';
  }
  if (text.indexOf('-') > 0) {
    operator = '-';
  }
  if (text.indexOf('*') > 0) {
    operator = '*';
  }
  if (text.indexOf('/') > 0) {
    operator = '/';
  }

  const idxOperator = text.indexOf(operator);

  const left = +text.slice(0, idxOperator);
  const right = +text.slice(idxOperator + 1);

  let result;

  switch (operator) {
    case '+': {
      result = left + right;
      break;
    }
    case '-': {
      result = left - right;
      break;
    }
    case '*': {
      result = left * right;
      break;
    }
    case '/': {
      result = left / right;
      break;
    }
    default: {
      console.error('Error');
    }
  }
  return result;
}

Array.from(buttons).forEach((val) => {
  val.addEventListener('click', () => {
    inputText.value += val.innerHTML;
  });
});

Array.from(operators).forEach((operator) => {
  operator.addEventListener('click', () => {
    const str = inputText.value[inputText.value.length - 1];

    if (!Number.isNaN(Number(str))) {
      inputText.value += operator.innerHTML;
    }
  });
});

reset.addEventListener('click', () => {
  inputText.value = '';
});

equal.addEventListener('click', () => {
  inputText.value = calc(inputText.value);
});
