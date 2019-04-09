import {
  getRandomNumber,
  getQuestionAndAnswer,
  playGame,
} from '..';

const gameMessage = '\nAnswer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const gameIsEven = () => {
  const questions = getRandomNumber();
  const userAnswer = getQuestionAndAnswer(questions);
  const correctAnswer = isEven(questions) ? 'yes' : 'no';

  return {
    userAnswer,
    correctAnswer,
  };
};

export default () => playGame(gameIsEven, gameMessage);
