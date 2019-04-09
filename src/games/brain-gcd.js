import {
  getRandomNumber,
  getQuestionAndAnswer,
  playGame,
} from '..';

const gameMessage = '\nFind the greatest common divisor of given numbers.';

const gcdData = () => {
  const numOne = getRandomNumber();
  const numTwo = getRandomNumber();

  let copyNumOne = numOne;
  let copyNumTwo = numTwo;

  while (copyNumTwo !== 0) {
    const buf = copyNumOne % copyNumTwo;
    copyNumOne = copyNumTwo;
    copyNumTwo = buf;
  }

  const result = copyNumOne;

  return [numOne, numTwo, result];
};

const gameGcd = () => {
  const [numOne, numTwo, correctAnswer] = gcdData();
  const userAnswer = Number(getQuestionAndAnswer(numOne, numTwo));

  return {
    userAnswer,
    correctAnswer,
  };
};

export default () => playGame(gameGcd, gameMessage);
