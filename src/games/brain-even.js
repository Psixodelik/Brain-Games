import getName from '..';
import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
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
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${boolToWord(isEven(num))}`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }

    console.log('Correct');
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};
