import createGame from '..';

import {
  getRandomNumber,
  questionToString,
} from '../utils';

const gameDescription = '\nAnswer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const gamePrimeNumber = () => {
  const question = questionToString(getRandomNumber(0, 4000));
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => createGame(gamePrimeNumber, gameDescription);
