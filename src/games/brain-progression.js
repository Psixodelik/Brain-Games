import createGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = (start, steps, count) => {
  const progression = [];

  for (let i = 0; i < count; i += 1) {
    progression.push(start + steps * i);
  }

  return progression;
};

const createQuestionAndAnswer = () => {
  const progression = createProgression(
    getRandomNumber(0, 1000),
    getRandomNumber(1, 20),
    progressionLength,
  );

  const randomElementIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[randomElementIndex];
  progression[randomElementIndex] = '..';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => createGame(createQuestionAndAnswer, gameDescription);
