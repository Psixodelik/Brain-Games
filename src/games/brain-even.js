import gameInit, { getRandomNumber, resultMessage, getQuestionAndAnswer } from '..';

const isEven = num => num % 2 === 0;
const boolToWord = bool => (bool ? 'yes' : 'no');

export default () => {
  const gameMessage = '\nAnswer "yes" if number even otherwise answer "no".';
  const [userName, rounds, correctMessage] = gameInit(gameMessage);
  const correctAnswerString = ['yes', 'no'];

  for (let i = 0; i < rounds; i += 1) {
    const num = getRandomNumber(0, 100);
    const userAnswer = getQuestionAndAnswer(num);
    const boolAnswer = userAnswer === 'yes';

    if (isEven(num) !== boolAnswer || !correctAnswerString.includes(userAnswer)) {
      return resultMessage(userName, false, userAnswer, boolToWord(isEven(num)));
    }

    correctMessage();
  }

  return resultMessage(userName, true);
};
