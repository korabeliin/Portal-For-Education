const textarea = document.querySelector('#numpad-textarea');

const enterNumber = (number) => {
  if (number === 0 && !textarea.value) return;

  textarea.value = textarea.value + number;
}

const sumNumbers = () => {
  if (!textarea.value || textarea.value[textarea.value.length - 1] === '+') return;
  if (textarea.value.includes('+')) {
    const numbersArr = textarea.value.split('+');
    const result = +numbersArr[0] + +numbersArr[1];
    textarea.value = result;
  }
  textarea.value = textarea.value + '+';
}

const subNumbers = () => {
  if (!textarea.value || textarea.value[textarea.value.length - 1] === '-') return;
  if (textarea.value.includes('-')) {
    const numbersArr = textarea.value.split('-');
    const result = +numbersArr[0] - +numbersArr[1];
    textarea.value = result;
  }
    textarea.value = textarea.value + '-';
}

const multNumbers = () => {
  if (!textarea.value || textarea.value[textarea.value.length - 1] === '*') return;
  if (textarea.value.includes('*')) {
    const numbersArr = textarea.value.split('*');
    const result = +numbersArr[0] * +numbersArr[1];
    textarea.value = result;
  }
  textarea.value = textarea.value + '*';
}
const divNumbers = () => {
  if (!textarea.value || textarea.value[textarea.value.length - 1] === '/') return;
  if (textarea.value.includes('/')) {
    const numbersArr = textarea.value.split('/');
    const result = +numbersArr[0] / +numbersArr[1];
    textarea.value = result;
  }
  textarea.value = textarea.value + '/';
}
const mod = () => {
  if (!textarea.value || textarea.value[textarea.value.length - 1] === '%') return;
  if (textarea.value.includes('%')) {
    const numbersArr = textarea.value.split('%');
    const result = +numbersArr[0] % +numbersArr[1];
    textarea.value = result;
  }
}
const pow = () => {
  if (!textarea.value || textarea.value[textarea.value.length - 1] === '^') return;
  if (textarea.value.includes('^')) {
    const numbersArr = textarea.value.split('^');
    const result = Math.pow(+numbersArr[0], +numbersArr[1]);
    textarea.value = result;
  }
  textarea.value = textarea.value + '^';
}

const logar = () => {
    const number = textarea.value;
    const logNum = Math.log(+number);
    textarea.value = logNum;
}

const factor = () => {
  let num = +textarea.value;
  if (textarea.value[textarea.value.length - 1] === '!') return;
  for (let i = num - 1; i >= 1; i--) {
    num = num * i
    }
  textarea.value = num;
}

const clearArea = () => {
  textarea.value = '';
}