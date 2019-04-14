import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[getRandomNumber(0, operators.length - 1)];

const calculate = (numOne, numTwo, operator) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    default:
      return numOne * numTwo;
  }
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
