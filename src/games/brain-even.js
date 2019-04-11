import createGame from '..';

import {
  getRandomNumber,
  questionToString,
} from '../utils';

const gameDescription = '\nAnswer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const gameIsEven = () => {
  const question = questionToString(getRandomNumber());
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => createGame(gameIsEven, gameDescription);
