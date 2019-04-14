import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[getRandomNumber(0, operators.length - 1)];

const calculate = (numOne, numTwo, operator) => {
  let result = 0;
  switch (operator) {
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
  }

  return result;
};

const createQuestionAndAnswer = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  const currentOperator = getRandomOperator();

  const question = `${numOne} ${currentOperator} ${numTwo}`;
  const correctAnswer = calculate(numOne, numTwo, currentOperator).toString();

  return { question, correctAnswer };
};

export default () => playGame(createQuestionAndAnswer, gameDescription);
