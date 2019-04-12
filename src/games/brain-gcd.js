import createGame from '..';
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

  const result = copyNumOne;

  return result;
};

const gameGcd = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();
  const question = [numOne, numTwo].join(' ');
  const correctAnswer = calcGcd(numOne, numTwo);

  return { question, correctAnswer };
};

export default () => createGame(gameGcd, gameDescription);
