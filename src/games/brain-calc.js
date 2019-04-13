import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperations = () => operators[getRandomNumber(0, operators.length - 1)];

const calculate = (numOne, numTwo, operation) => {
  switch (operation) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      return 'Incorrect operation';
  }
};

const createQuestionAndAnswer = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  const currentOperations = getRandomOperations();

  const question = `${numOne} ${currentOperations} ${numTwo}`;
  const correctAnswer = calculate(numOne, numTwo, currentOperations).toString();

  return { question, correctAnswer };
};

export default () => playGame(createQuestionAndAnswer, gameDescription);
