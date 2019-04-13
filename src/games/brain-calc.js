import createGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getRandomOperations = () => operations[getRandomNumber(0, operations.length - 1)];

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
  const correctAnswer = calculate(numOne, numTwo, currentOperations);

  return { question, correctAnswer };
};

export default () => createGame(createQuestionAndAnswer, gameDescription);
