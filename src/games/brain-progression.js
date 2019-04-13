import playGame from '..';
import getRandomNumber from '../utils';

const getRandomRoute = (randomNumber = getRandomNumber(0, 1)) => (randomNumber === 0 ? 'asc' : 'desc');

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = ({ start, steps, routeAsk }) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionElement = routeAsk === 'asc' ? start + steps * i : start - steps * i;
    progression.push(progressionElement);
  }

  return progression;
};

const createQuestionAndAnswer = () => {
  const progression = createProgression(
    {
      start: getRandomNumber(0, 1000),
      steps: getRandomNumber(1, 20),
      routeAsk: getRandomRoute(),
    },
  );

  const randomElementIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[randomElementIndex].toString();
  progression[randomElementIndex] = '..';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => playGame(createQuestionAndAnswer, gameDescription);
