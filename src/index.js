const buttons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const inputText = document.querySelector('input');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');

Array.from(buttons).forEach((val) => {
  val.addEventListener('click', () => {
    inputText.value += val.innerHTML;
  });
});

Array.from(operators).forEach((operator) => {
  operator.addEventListener('click', () => {
    inputText.value += operator.innerHTML;
  });
});

reset.addEventListener('click', () => {
  inputText.value = '';
});

equal.addEventListener('click', () => {
  inputText.value = eval(inputText.value);
});
