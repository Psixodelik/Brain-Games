import createGame from '..';

import {
  getRandomNumber,
  questionToString,
} from '../utils';


const gameDescription = '\nWhat number is missing in the progression?';

const setRandomProgression = (steps, count) => {
  const firstElement = getRandomNumber(0, 1000);
  const progression = [firstElement];

  for (let i = 1; i < count; i += 1) {
    progression.push(progression[i - 1] + steps);
  }

  const replaceElementIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[replaceElementIndex];
  progression[replaceElementIndex] = '..';

  return { numbers: progression, answer };
};

const gameProgression = () => {
  const progression = setRandomProgression(getRandomNumber(1, 20), 10);
  const question = questionToString(progression.numbers);
  const correctAnswer = progression.answer;

  return { question, correctAnswer };
};

export default () => createGame(gameProgression, gameDescription);
