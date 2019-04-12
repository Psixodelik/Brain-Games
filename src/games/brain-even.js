import createGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const gameIsEven = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => createGame(gameIsEven, gameDescription);
