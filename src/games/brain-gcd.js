import play from '..';

import {
  getRandomNumber,
  gcd,
  questionToString,
} from '../utils';

const gameDescription = '\nFind the greatest common divisor of given numbers.';

const gameGcd = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  const question = questionToString(numOne, numTwo);
  const correctAnswer = gcd(numOne, numTwo);

  return { question, correctAnswer };
};

export default () => play(gameGcd, gameDescription);
