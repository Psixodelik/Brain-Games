import createGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const gamePrimeNumber = () => {
  const question = getRandomNumber(0, 4000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => createGame(gamePrimeNumber, gameDescription);
