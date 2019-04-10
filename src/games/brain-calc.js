import play from '..';

import {
  getRandomExpression,
  getRandomNumber,
  calculate,
  questionToString,
} from '../utils';

const gameDescription = '\nWhat is the result of the expression?';

const gameCalc = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  const currentExpression = getRandomExpression();

  const question = questionToString(numOne, currentExpression, numTwo);
  const correctAnswer = calculate(numOne, numTwo, currentExpression);

  return { question, correctAnswer };
};

export default () => play(gameCalc, gameDescription);
