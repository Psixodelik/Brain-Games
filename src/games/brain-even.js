import play from '..';

import {
  getRandomNumber,
  isEven,
  questionToString,
} from '../utils';

const gameDescription = '\nAnswer "yes" if number even otherwise answer "no".';

const gameIsEven = () => {
  const question = questionToString(getRandomNumber());
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => play(gameIsEven, gameDescription);
