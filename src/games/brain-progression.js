import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = (start, steps) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + steps * i);
  }

  return progression;
};

const createQuestionAndAnswer = () => {
  const progression = createProgression(
    getRandomNumber(0, 1000),
    getRandomNumber(-20, 20),
  );

  const randomElementIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[randomElementIndex].toString();
  progression[randomElementIndex] = '..';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => playGame(createQuestionAndAnswer, gameDescription);
