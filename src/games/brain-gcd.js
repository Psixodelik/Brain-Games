import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calcGcd = (numOne, numTwo) => {
  let copyNumOne = numOne;
  let copyNumTwo = numTwo;

  while (copyNumTwo !== 0) {
    const buf = copyNumOne % copyNumTwo;
    copyNumOne = copyNumTwo;
    copyNumTwo = buf;
  }

  return copyNumOne;
};

const createQuestionAndAnswer = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  const question = `${numOne} ${numTwo}`;
  const correctAnswer = calcGcd(numOne, numTwo).toString();

  return { question, correctAnswer };
};

export default () => playGame(createQuestionAndAnswer, gameDescription);
