import getName, { getRandomNumber, resultMessage } from '..';
import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const boolToWord = bool => (bool ? 'yes' : 'no');

export default () => {
  const gameMessage = '\nAnswer "yes" if number even otherwise answer "no".';
  const userName = getName(gameMessage);
  const correctAnswerString = ['yes', 'no'];
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num = getRandomNumber(0, 100);
    const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
    const boolAnswer = userAnswer === 'yes';

    if (isEven(num) !== boolAnswer || !correctAnswerString.includes(userAnswer)) {
      resultMessage(userName, false, userAnswer, boolToWord(isEven(num)));
      return false;
    }

    console.log('Correct');
  }

  resultMessage(userName, true);
  return true;
};
