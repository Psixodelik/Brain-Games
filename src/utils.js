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

const randomProgression = (steps, count) => {
  const firstElement = getRandomNumber(0, 1000);
  const progression = [firstElement];

  for (let i = 1; i < count; i += 1) {
    progression.push(progression[i - 1] + steps);
  }

  const replaceElementIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[replaceElementIndex];
  progression[replaceElementIndex] = '..';

  return { numbers: progression, answer };
};

const questionToString = (...data) => (data[0] instanceof Array ? data[0].join(' ') : data.join(' '));

export {
  getRandomNumber,
  getRandomExpression,
  isEven,
  calculate,
  gcd,
  questionToString,
  randomProgression,
};
