const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomExpression = () => {
  const expressions = ['+', '-', '*'];
  return expressions[getRandomNumber(0, expressions.length - 1)];
};

const isEven = num => num % 2 === 0;

const calculate = (numOne, numTwo, expression) => {
  let result = null;

  switch (expression) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
    default:
      break;
  }

  return result;
};

const gcd = (numOne, numTwo) => {
  let copyNumOne = numOne;
  let copyNumTwo = numTwo;

  while (copyNumTwo !== 0) {
    const buf = copyNumOne % copyNumTwo;
    copyNumOne = copyNumTwo;
    copyNumTwo = buf;
  }

  const result = copyNumOne;

  return result;
};

const questionToString = (...data) => data.join(' ');

export {
  getRandomNumber,
  getRandomExpression,
  isEven,
  calculate,
  gcd,
  questionToString,
};
