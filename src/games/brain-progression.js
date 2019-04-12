import createGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const createRandomProgression = (start, steps, count) => {
  const progression = [];

  for (let i = 0; i < count; i += 1) {
    progression.push(start + steps * i);
  }

  const randomElementIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[randomElementIndex];
  progression[randomElementIndex] = '..';

  return { numbers: progression, answer };
};

const gameProgression = () => {
  const progressionSettings = {
    start: getRandomNumber(0, 1000),
    steps: getRandomNumber(1, 20),
    count: 10,
  };

  const progression = createRandomProgression(
    progressionSettings.start,
    progressionSettings.steps,
    progressionSettings.count,
  );
  const question = progression.numbers.join(' ');
  const correctAnswer = progression.answer;

  return { question, correctAnswer };
};

export default () => createGame(gameProgression, gameDescription);
