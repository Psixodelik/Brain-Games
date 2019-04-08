import gameInit, { getRandomExpression, resultMessage, getQuestionAndAnswer } from '..';

export default () => {
  const gameMessage = '\nWhat is the result of the expression?';
  const [userName, rounds, correctMessage] = gameInit(gameMessage);

  for (let i = 0; i < rounds; i += 1) {
    const [numOne, numTwo, expression, answer] = getRandomExpression();
    const userAnswer = Number(getQuestionAndAnswer(numOne, expression, numTwo));

    if (userAnswer !== answer) {
      return resultMessage(userName, false, userAnswer, answer);
    }

    correctMessage();
  }

  return resultMessage(userName, true);
};
