import createGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';

const getRandomExpression = () => {
  const expressions = ['+', '-', '*'];
  return expressions[getRandomNumber(0, expressions.length - 1)];
};

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

const gameCalc = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  const currentExpression = getRandomExpression();

  const question = [numOne, currentExpression, numTwo].join(' ');
  const correctAnswer = calculate(numOne, numTwo, currentExpression);

  return { question, correctAnswer };
};

export default () => createGame(gameCalc, gameDescription);
