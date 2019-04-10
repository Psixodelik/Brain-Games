import play from '..';

import {
  getRandomNumber,
  randomProgression,
  questionToString,
} from '../utils';


const gameDescription = '\nWhat number is missing in the progression?';

const gameProgression = () => {
  const progression = randomProgression(getRandomNumber(1, 20), 10);
  const question = questionToString(progression.numbers);
  const correctAnswer = progression.answer;

  return { question, correctAnswer };
};

export default () => play(gameProgression, gameDescription);
